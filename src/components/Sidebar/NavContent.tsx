import { t, Trans } from "@lingui/macro";
import { Box, Divider, Link, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Icon, NavItem } from "@olympusdao/component-library";
import React from "react";
import { NavLink } from "react-router-dom";
import WalletAddressEns from "src/components/TopBar/Wallet/WalletAddressEns";
import { sortByDiscount } from "src/helpers/bonds/sortByDiscount";
import { Environment } from "src/helpers/environment/Environment/Environment";
import { useTestableNetworks } from "src/hooks/useTestableNetworks";
import { BondDiscount } from "src/views/Bond/components/BondDiscount";
import { useLiveBonds, useLiveBondsV3 } from "src/views/Bond/hooks/useLiveBonds";
import { useNetwork } from "wagmi";

const PREFIX = "NavContent";

const classes = {
  gray: `${PREFIX}-gray`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`& .${classes.gray}`]: {
    color: theme.colors.gray[90],
  },
}));

const NavContent: React.VFC = () => {
  const { chain = { id: 180 } } = useNetwork();
  const networks = useTestableNetworks();

  return (
    <Paper className="dapp-sidebar">
      <Box className="dapp-sidebar-inner" display="flex" justifyContent="space-between" flexDirection="column">
        <div className="dapp-menu-top">
          <Box className="branding-header">
            <Link href="https://amechain.io/" target="_blank" rel="noopener noreferrer">
              <img src={"/logotext.png"} />
            </Link>

            <WalletAddressEns />
          </Box>

          <div className="dapp-menu-links">
            <div className="dapp-nav" id="navbarNav">
              {chain.id === networks.MAINNET ? (
                <>
                  <NavItem to="/dashboard" icon="dashboard" label={t`Dashboard`} />

                  <NavItem to="/bonds" icon="bond" label={t`Bond`}>
                    <Bonds />
                    <InverseBonds />
                  </NavItem>

                  <NavItem to="/stake" icon="stake" label={t`Stake`} />

                  <NavItem to="/zap" icon="zap" label={t`Zap`} />

                  {Environment.isGiveEnabled() && <NavItem to="/give" icon="give" label={t`Give`} />}

                  <NavItem to="/wrap" icon="wrap" label={t`Wrap`} />

                  <NavItem icon="bridge" label={t`Bridge`} to="/bridge" />

                  <Box className="menu-divider">
                    <Divider />
                  </Box>

                  <NavItem href="https://pro.olympusdao.finance/" icon="olympus" label={t`AME Pro`} />

                  <Box className="menu-divider">
                    <Divider />
                  </Box>
                </>
              ) : (
                <>
                  <NavItem to="/wrap" icon="wrap" label={t`Wrap`} />

                  <NavItem icon="bridge" label={t`Bridge`} to="/bridge" />
                </>
              )}

              <NavItem href="#" icon="forum" label={t`Forum`} />

              <NavItem href="#" icon="governance" label={t`Governance`} />

              <NavItem href="#" icon="docs" label={t`Docs`} />

              <NavItem href="#" icon="bug-report" label={t`Bug Bounty`} />

              <NavItem href="#" icon="grants" label={t`Grants`} />
            </div>
          </div>
        </div>

        <StyledBox display="flex" justifyContent="space-between" paddingX="50px" paddingY="24px">
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Icon name="github" className={classes.gray} />
          </Link>

          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Icon name="medium" className={classes.gray} />
          </Link>

          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Icon name="twitter" className={classes.gray} />
          </Link>

          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Icon name="discord" className={classes.gray} />
          </Link>
        </StyledBox>
      </Box>
    </Paper>
  );
};

const Bonds: React.VFC = () => {
  const { data: bondsV2 = [] } = useLiveBonds();
  const { data: bondsV3 = [] } = useLiveBondsV3();

  const bonds = bondsV2.concat(bondsV3);

  if (!bonds || bonds.length === 0) return null;

  return (
    <Box ml="26px" mt="16px" mb="12px">
      {sortByDiscount(bonds)
        .filter(bond => !bond.isSoldOut)
        .map(bond => (
          <Box mt="8px">
            <Link key={bond.id} component={NavLink} to={`/bonds/${bond.isV3Bond ? `v3/` : ""}${bond.id}`}>
              <Typography variant="body1">
                <Box display="flex" flexDirection="row" justifyContent="space-between">
                  {bond.quoteToken.name}
                  <BondDiscount discount={bond.discount} />
                </Box>
              </Typography>
            </Link>
          </Box>
        ))}
    </Box>
  );
};

const InverseBonds: React.VFC = () => {
  const bonds = useLiveBonds({ isInverseBond: true }).data;

  if (!bonds || bonds.length === 0) return null;

  return (
    <Box ml="26px" mt="16px" mb="12px">
      <Typography variant="body2" color="textSecondary">
        <Trans>Inverse Bonds</Trans>
      </Typography>

      <Box mt="12px">
        {sortByDiscount(bonds)
          .filter(bond => !bond.isSoldOut)
          .map(bond => (
            <Box mt="8px">
              <Link key={bond.id} component={NavLink} to={`/bonds/inverse/${bond.id}`}>
                <Typography variant="body1">
                  <Box display="flex" flexDirection="row" justifyContent="space-between">
                    {bond.quoteToken.name}
                    <BondDiscount discount={bond.discount} />
                  </Box>
                </Typography>
              </Link>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default NavContent;
