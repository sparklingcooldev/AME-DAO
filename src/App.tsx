/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "src/style.scss";

import { useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, ThemeProvider } from "@mui/material/styles";
import {
  darkTheme as rainbowDarkTheme,
  lightTheme as rainbowLightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Messages from "src/components/Messages/Messages";
import { MigrationCallToAction } from "src/components/MigrationCallToAction";
import { MigrationNotification } from "src/components/MigrationNotification";
import NavDrawer from "src/components/Sidebar/NavDrawer";
import Sidebar from "src/components/Sidebar/Sidebar";
import StagingNotification from "src/components/StagingNotification";
import { StakeVersionContainer } from "src/components/StakeVersionContainer";
import TopBar from "src/components/TopBar/TopBar";
import Wallet from "src/components/TopBar/Wallet";
import { useGoogleAnalytics } from "src/hooks/useGoogleAnalytics";
import useTheme from "src/hooks/useTheme";
import { chains } from "src/hooks/wagmi";
import { getMigrationAllowances, loadAccountDetails } from "src/slices/AccountSlice";
import { loadAppDetails } from "src/slices/AppSlice";
// import { error } from "src/slices/MessagesSlice";
import { AppDispatch } from "src/store";
import { dark as darkTheme } from "src/themes/dark.js";
import { girth as gTheme } from "src/themes/girth.js";
import { light as lightTheme } from "src/themes/light.js";
import { useAccount, useConnect, useNetwork, useProvider } from "wagmi";

// Dynamic Imports for code splitting
const Bond = lazy(() => import("./views/Bond"));
const Bridge = lazy(() => import("./views/Bridge"));
const Give = lazy(() => import("./views/Give/Give"));
const TreasuryDashboard = lazy(() => import("./views/TreasuryDashboard/TreasuryDashboard"));
const NotFound = lazy(() => import("./views/404/NotFound"));
const V1Stake = lazy(() => import("./views/V1-Stake/V1-Stake"));
const Wrap = lazy(() => import("./views/Wrap/Wrap"));
const Zap = lazy(() => import("./views/Zap/Zap"));

const PREFIX = "App";

const classes = {
  drawer: `${PREFIX}-drawer`,
  content: `${PREFIX}-content`,
  contentShift: `${PREFIX}-contentShift`,
  toolbar: `${PREFIX}-toolbar`,
  drawerPaper: `${PREFIX}-drawerPaper`,
  notification: `${PREFIX}-notification`,
};

const StyledDiv = styled("div")(({ theme }) => ({
  [`& .${classes.drawer}`]: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  [`& .${classes.content}`]: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: transitionDuration,
    }),
    height: "100%",
    overflow: "auto",
    marginLeft: drawerWidth,
  },

  [`& .${classes.contentShift}`]: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: transitionDuration,
    }),
    marginLeft: 0,
  },

  // necessary for content to be below app bar
  [`& .${classes.toolbar}`]: theme.mixins.toolbar,

  [`& .${classes.drawerPaper}`]: {
    width: drawerWidth,
  },

  [`& .${classes.notification}`]: {
    marginLeft: "312px",
  },
}));

// 😬 Sorry for all the console logging
const DEBUG = false;

// 🛰 providers
if (DEBUG) console.log("📡 Connecting to Mainnet Ethereum");
// 🔭 block explorer URL
// const blockExplorer = targetNetwork.blockExplorer;

const drawerWidth = 312;
const transitionDuration = 969;

function App() {
  useGoogleAnalytics();
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();
  const [theme, toggleTheme] = useTheme();

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { address = "", isConnected } = useAccount();
  const { error: errorMessage } = useConnect();

  const provider = useProvider();
  const { chain = { id: 180 } } = useNetwork();

  const [migrationModalOpen, setMigrationModalOpen] = useState(false);
  const migModalClose = () => {
    setMigrationModalOpen(false);
  };

  const isSmallerScreen = useMediaQuery("(max-width: 980px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const loadApp = useCallback(
    loadProvider => {
      dispatch(loadAppDetails({ networkID: chain.id, provider: loadProvider }));
    },
    [chain.id, address],
  );

  const loadAccount = useCallback(() => {
    dispatch(loadAccountDetails({ networkID: chain.id, provider, address }));
    dispatch(getMigrationAllowances({ address, provider, networkID: chain.id }));
  }, [chain.id, address]);

  // The next 3 useEffects handle initializing API Loads AFTER wallet is checked
  //
  // this useEffect checks Wallet Connection & then sets State for reload...
  // ... we don't try to fire Api Calls on initial load because web3Context is not set yet
  // ... if we don't wait we'll ALWAYS fire API calls via JsonRpc because provider has not
  // ... been reloaded within App.
  // useEffect(() => {
  //   // if (shouldTriggerSafetyCheck()) {
  //   //   dispatch(info("Safety Check: Always verify you're on app.olympusdao.finance!"));
  //   // }
  //   loadDetails("app");
  // }, []);

  // this useEffect picks up any time a user Connects via the button
  // useEffect(() => {
  //   // don't load ANY details until wallet is Connected
  //   if (isConnected && provider) {
  //     loadDetails("account");
  //   }
  // }, [isConnected, chain.id, provider]);

  // useEffect(() => {
  //   if (errorMessage) dispatch(error(errorMessage.message));
  // }, [errorMessage]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarExpanded(false);
  };

  const themeMode = theme === "light" ? lightTheme : theme === "dark" ? darkTheme : gTheme;

  useEffect(() => {
    if (isSidebarExpanded) handleSidebarClose();
  }, [location]);

  return (
    <StyledDiv>
      <RainbowKitProvider
        chains={chains}
        theme={
          theme === "dark"
            ? rainbowDarkTheme({ accentColor: "#676B74" })
            : rainbowLightTheme({ accentColor: "#E0E2E3", accentColorForeground: "#181A1D" })
        }
      >
        <ThemeProvider theme={themeMode}>
          <CssBaseline />
          <div className={`app ${isSmallerScreen && "tablet"} ${isSmallScreen && "mobile"} ${theme}`}>
            <StagingNotification />
            <Messages />
            <TopBar theme={theme} toggleTheme={toggleTheme} handleDrawerToggle={handleDrawerToggle} />
            <nav className={classes.drawer}>
              {isSmallerScreen ? (
                <NavDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
              ) : (
                <Sidebar />
              )}
            </nav>

            <div className={`${classes.content} ${isSmallerScreen && classes.contentShift}`}>
              <MigrationCallToAction setMigrationModalOpen={setMigrationModalOpen} />
              <Suspense fallback={<div></div>}>
                <Routes>
                  <Route path="/" element={<Navigate to="/stake" />} />
                  <Route
                    path="/stake"
                    element={<StakeVersionContainer setMigrationModalOpen={setMigrationModalOpen} />}
                  />
                  <Route path="/v1-stake" element={<V1Stake setMigrationModalOpen={setMigrationModalOpen} />} />
                  <Route path="/give/*" element={<Give />} />

                  <Route path="/olympusgive" element={<Navigate to="/give" />} />
                  <Route path="/olygive" element={<Navigate to="/give" />} />
                  <Route path="/tyche" element={<Navigate to="/give" />} />
                  <Route path="/olympusdaogive" element={<Navigate to="/give" />} />
                  <Route path="/ohmgive" element={<Navigate to="/give" />} />

                  <Route path="/wrap" element={<Wrap />} />
                  <Route path="/zap" element={<Zap />} />
                  <Route path="/bonds/*" element={<Bond />} />
                  <Route path="/bridge" element={<Bridge />} />
                  <Route path="/dashboard/*" element={<TreasuryDashboard />} />

                  <Route path={"/info/*"} element={<Wallet open={true} component="info" />} />
                  <Route path={"/utility"} element={<Wallet open={true} component="utility" />} />
                  <Route path={"/wallet/history"} element={<Wallet open={true} component="wallet/history" />} />
                  <Route path="/wallet" element={<Wallet open={true} component="wallet" />}></Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </div>

          <MigrationNotification isModalOpen={migrationModalOpen} onClose={migModalClose} />
        </ThemeProvider>
      </RainbowKitProvider>
    </StyledDiv>
  );
}

export default App;
