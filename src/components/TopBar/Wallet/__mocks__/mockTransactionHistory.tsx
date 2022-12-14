import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";

export const bondPurchaseTransaction = {
  token: {
    name: "AME",
    addresses: {
      "1": "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
      "4": "0xd7B98050962ec7cC8D11a83446B3217257C754B7",
    },
    _contractCache: {},
    icons: ["AME"],
    decimals: 9,
    purchaseUrl:
      "https://app.sushi.com/swap?inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f&outputCurrency=0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
  },
  transaction: {
    block_signed_at: "2022-01-30T09:24:57Z",
    block_height: 0,
    tx_hash: "",
    tx_offset: 267,
    successful: true,
    from_address: "0xDd1E5f42baA201050c4686FDF4e3FDE16A58BC6F",
    from_address_label: null,
    to_address: "0x9025046c6fb25fb39e720d97a8fd881ed69a1ef6",
    to_address_label: null,
    value: "0",
    value_quote: 0,
    gas_offered: 280570,
    gas_spent: 255870,
    gas_price: 58123484348,
    gas_quote: 39.07767766744055,
    gas_quote_rate: 2627.5908203125,
    log_events: [
      {
        block_signed_at: "2022-01-30T09:24:57Z",
        block_height: 0,
        tx_offset: 267,
        log_offset: 339,
        tx_hash: "",
        raw_log_topics: [
          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
          "0x0000000000000000000000008d7a5fedf55b68625b2e5953f8203b029cb9c44e",
          "0x0000000000000000000000009025046c6fb25fb39e720d97a8fd881ed69a1ef6",
        ],
        sender_contract_decimals: 18,
        sender_name: "Frax",
        sender_contract_ticker_symbol: "FRAX",
        sender_address: "0x853d955acef822db058eb8505911ed77f175b99e",
        sender_address_label: "Frax (FRAX)",
        sender_logo_url: "https://logos.covalenthq.com/tokens/0x853d955acef822db058eb8505911ed77f175b99e.png",
        raw_log_data: "0x000000000000000000000000000000000000007e37bdffebf51e230431766906",
        decoded: {
          name: "Approval",
          signature: "Approval(indexed address owner, indexed address spender, uint256 value)",
          params: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0xDd1E5f42baA201050c4686FDF4e3FDE16A58BC6F",
            },
            {
              name: "spender",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0x9025046c6fb25fb39e720d97a8fd881ed69a1ef6",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "9999999847873488262851204638982",
            },
          ],
        },
      },
      {
        block_signed_at: "2022-01-30T09:24:57Z",
        block_height: 0,
        tx_offset: 267,
        log_offset: 338,
        tx_hash: "",
        raw_log_topics: [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000008d7a5fedf55b68625b2e5953f8203b029cb9c44e",
          "0x0000000000000000000000009a315bdf513367c0377fb36545857d12e85813ef",
        ],
        sender_contract_decimals: 18,
        sender_name: "Frax",
        sender_contract_ticker_symbol: "FRAX",
        sender_address: "0x853d955acef822db058eb8505911ed77f175b99e",
        sender_address_label: "Frax (FRAX)",
        sender_logo_url: "https://logos.covalenthq.com/tokens/0x853d955acef822db058eb8505911ed77f175b99e.png",
        raw_log_data: "0x000000000000000000000000000000000000000000000eb79b080e27365a23a2",
        decoded: {
          name: "Transfer",
          signature: "Transfer(indexed address from, indexed address to, uint256 value)",
          params: [
            {
              name: "from",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0xDd1E5f42baA201050c4686FDF4e3FDE16A58BC6F",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0x9a315bdf513367c0377fb36545857d12e85813ef",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "69500056120101151843234",
            },
          ],
        },
      },
      {
        block_signed_at: "2022-01-30T09:24:57Z",
        block_height: 0,
        tx_offset: 267,
        log_offset: 337,
        tx_hash: "",
        raw_log_topics: [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000000ab87046fbb341d058f17cbc4c1133f25a20a52f",
          "0x0000000000000000000000009025046c6fb25fb39e720d97a8fd881ed69a1ef6",
        ],
        sender_contract_decimals: 18,
        sender_name: "Governance AME",
        sender_contract_ticker_symbol: "gOHM",
        sender_address: "0x0ab87046fbb341d058f17cbc4c1133f25a20a52f",
        sender_address_label: null,
        sender_logo_url: "https://logos.covalenthq.com/tokens/0x0ab87046fbb341d058f17cbc4c1133f25a20a52f.png",
        raw_log_data: "0x000000000000000000000000000000000000000000000000d6eb39e73818731c",
        decoded: {
          name: "Transfer",
          signature: "Transfer(indexed address from, indexed address to, uint256 value)",
          params: [
            {
              name: "from",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0x0ab87046fbb341d058f17cbc4c1133f25a20a52f",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0x9025046c6fb25fb39e720d97a8fd881ed69a1ef6",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "15486535408884937500",
            },
          ],
        },
      },
      {
        block_signed_at: "2022-01-30T09:24:57Z",
        block_height: 14106332,
        tx_offset: 267,
        log_offset: 336,
        tx_hash: "",
        raw_log_topics: [
          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
          "0x0000000000000000000000009025046c6fb25fb39e720d97a8fd881ed69a1ef6",
          "0x000000000000000000000000b63cac384247597756545b500253ff8e607a8020",
        ],
        sender_contract_decimals: 9,
        sender_name: "Olympus",
        sender_contract_ticker_symbol: "AME",
        sender_address: "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
        sender_address_label: null,
        sender_logo_url: "https://logos.covalenthq.com/tokens/0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5.png",
        raw_log_data: "0x000000000000000000000000002cd76fe086b93ce2f768a00b220fbd13143896",
        decoded: {
          name: "Approval",
          signature: "Approval(indexed address owner, indexed address spender, uint256 value)",
          params: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0x9025046c6fb25fb39e720d97a8fd881ed69a1ef6",
            },
            {
              name: "spender",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0xb63cac384247597756545b500253ff8e607a8020",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "999999999999999999999999999999841382882883734",
            },
          ],
        },
      },
      {
        block_signed_at: "2022-01-30T09:24:57Z",
        block_height: 14106332,
        tx_offset: 267,
        log_offset: 335,
        tx_hash: "",
        raw_log_topics: [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000009025046c6fb25fb39e720d97a8fd881ed69a1ef6",
          "0x000000000000000000000000b63cac384247597756545b500253ff8e607a8020",
        ],
        sender_contract_decimals: 9,
        sender_name: "Olympus",
        sender_contract_ticker_symbol: "AME",
        sender_address: "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
        sender_address_label: null,
        sender_logo_url: "https://logos.covalenthq.com/tokens/0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5.png",
        raw_log_data: "0x0000000000000000000000000000000000000000000000000000010d7cef8424",
        decoded: {
          name: "Transfer",
          signature: "Transfer(indexed address from, indexed address to, uint256 value)",
          params: [
            {
              name: "from",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0x9025046c6fb25fb39e720d97a8fd881ed69a1ef6",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0xb63cac384247597756545b500253ff8e607a8020",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "1157442274340",
            },
          ],
        },
      },
      {
        block_signed_at: "2022-01-30T09:24:57Z",
        block_height: 14106332,
        tx_offset: 267,
        log_offset: 334,
        tx_hash: "",
        raw_log_topics: [
          "0x9d228d69b5fdb8d273a2336f8fb8612d039631024ea9bf09c424a9503aa078f0",
          "0x0000000000000000000000009025046c6fb25fb39e720d97a8fd881ed69a1ef6",
          "0x0000000000000000000000009025046c6fb25fb39e720d97a8fd881ed69a1ef6",
        ],
        sender_contract_decimals: 0,
        sender_name: null,
        sender_contract_ticker_symbol: null,
        sender_address: "0x9a315bdf513367c0377fb36545857d12e85813ef",
        sender_address_label: null,
        sender_logo_url: "https://logos.covalenthq.com/tokens/1/0x9a315bdf513367c0377fb36545857d12e85813ef.png",
        raw_log_data: "0x0000000000000000000000000000000000000000000000000000010d7cef8424",
        decoded: {
          name: "Minted",
          signature: "Minted(indexed address recipient, address gauge, uint256 minted)",
          params: null,
        },
      },
      {
        block_signed_at: "2022-01-30T09:24:57Z",
        block_height: 14106332,
        tx_offset: 267,
        log_offset: 333,
        tx_hash: "",
        raw_log_topics: [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x0000000000000000000000009025046c6fb25fb39e720d97a8fd881ed69a1ef6",
        ],
        sender_contract_decimals: 9,
        sender_name: "Olympus",
        sender_contract_ticker_symbol: "AME",
        sender_address: "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
        sender_address_label: null,
        sender_logo_url: "https://logos.covalenthq.com/tokens/0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5.png",
        raw_log_data: "0x0000000000000000000000000000000000000000000000000000010d7cef8424",
        decoded: {
          name: "Transfer",
          signature: "Transfer(indexed address from, indexed address to, uint256 value)",
          params: [
            {
              name: "from",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0x0000000000000000000000000000000000000000",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0x9025046c6fb25fb39e720d97a8fd881ed69a1ef6",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "1157442274340",
            },
          ],
        },
      },
      {
        block_signed_at: "2022-01-30T09:24:57Z",
        block_height: 14106332,
        tx_offset: 267,
        log_offset: 332,
        tx_hash: "",
        raw_log_topics: [
          "0x7880508a48fd3aee88f7e15917d85e39c3ad059e51ad4aca9bb46e7b4938b961",
          "0x000000000000000000000000000000000000000000000000000000000000000d",
        ],
        sender_contract_decimals: 0,
        sender_name: null,
        sender_contract_ticker_symbol: null,
        sender_address: "0x9025046c6fb25fb39e720d97a8fd881ed69a1ef6",
        sender_address_label: null,
        sender_logo_url: "https://logos.covalenthq.com/tokens/1/0x9025046c6fb25fb39e720d97a8fd881ed69a1ef6.png",
        raw_log_data:
          "0x000000000000000000000000000000000000000000000eb79b080e27365a23a20000000000000000000000000000000000000000000000000000000dfb08e769",
        decoded: {
          name: "Bond",
          signature: "Bond(indexed uint256 id, uint256 amount, uint256 price)",
          params: [
            {
              name: "id",
              type: "uint256",
              indexed: true,
              decoded: true,
              value: "13",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "69500056120101151843234",
            },
            {
              name: "price",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "60046239593",
            },
          ],
        },
      },
    ],
  },
  type: "bond",
  details: "Bond Purchased",
  value: new DecimalBigNumber("186075461403", 9),
};

export const bondClaimTransaction = {
  token: {
    name: "AME",
    addresses: {
      "1": "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
      "4": "0xd7B98050962ec7cC8D11a83446B3217257C754B7",
    },
    _contractCache: {},
    icons: ["AME"],
    decimals: 9,
    purchaseUrl:
      "https://app.sushi.com/swap?inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f&outputCurrency=0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
  },
  transaction: {
    block_signed_at: "2022-04-09T07:11:08Z",
    block_height: 14550108,
    tx_hash: "",
    tx_offset: 248,
    successful: true,
    from_address: "0xDd1E5f42baA201050c4686FDF4e3FDE16A58BC6F",
    from_address_label: null,
    to_address: "0x9025046c6fb25fb39e720d97a8fd881ed69a1ef6",
    to_address_label: null,
    value: "0",
    value_quote: 0,
    gas_offered: 179338,
    gas_spent: 179338,
    gas_price: 27175202887,
    gas_quote: 15.73186056865662,
    gas_quote_rate: 3228.0107421875,
    log_events: [
      {
        block_signed_at: "2022-04-09T07:11:08Z",
        block_height: 14550108,
        tx_offset: 248,
        log_offset: 671,
        tx_hash: "",
        raw_log_topics: [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000009025046c6fb25fb39e720d97a8fd881ed69a1ef6",
          "0x0000000000000000000000008d7a5fedf55b68625b2e5953f8203b029cb9c44e",
        ],
        sender_contract_decimals: 18,
        sender_name: "Governance AME",
        sender_contract_ticker_symbol: "gOHM",
        sender_address: "0x0ab87046fbb341d058f17cbc4c1133f25a20a52f",
        sender_address_label: null,
        sender_logo_url: "https://logos.covalenthq.com/tokens/0x0ab87046fbb341d058f17cbc4c1133f25a20a52f.png",
        raw_log_data: "0x000000000000000000000000000000000000000000000003ec3e9e8ef84f4e43",
        decoded: {
          name: "Transfer",
          signature: "Transfer(indexed address from, indexed address to, uint256 value)",
          params: [
            {
              name: "from",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0x9025046c6fb25fb39e720d97a8fd881ed69a1ef6",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0xDd1E5f42baA201050c4686FDF4e3FDE16A58BC6F",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "72363450199524200003",
            },
          ],
        },
      },
    ],
  },
  type: "bond",
  details: "Bond Claimed",
  value: new DecimalBigNumber("186075461403", 9),
};

export const supplyToFuseTransaction = {
  token: {
    name: "AME",
    addresses: {
      "1": "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
      "4": "0xd7B98050962ec7cC8D11a83446B3217257C754B7",
    },
    _contractCache: {},
    icons: ["AME"],
    decimals: 9,
    purchaseUrl:
      "https://app.sushi.com/swap?inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f&outputCurrency=0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
  },
  transaction: {
    block_signed_at: "2022-01-29T22:42:17Z",
    block_height: 14103441,
    tx_hash: "",
    tx_offset: 57,
    successful: true,
    from_address: "0xDd1E5f42baA201050c4686FDF4e3FDE16A58BC6F",
    from_address_label: null,
    to_address: "0x252d447c54f33e033ad04048baeade7628cb1274",
    to_address_label: null,
    value: "0",
    value_quote: 0,
    gas_offered: 512706,
    gas_spent: 498111,
    gas_price: 70678247339,
    gas_quote: 90.9073892833278,
    gas_quote_rate: 2582.1845703125,
    log_events: [
      {
        block_signed_at: "2022-01-29T22:42:17Z",
        block_height: 14103441,
        tx_offset: 57,
        log_offset: 126,
        tx_hash: "",
        raw_log_topics: ["0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929"],
        sender_contract_decimals: 9,
        sender_name: "Fraximalist Money Market Staked Olympus",
        sender_contract_ticker_symbol: "fsOHM-36",
        sender_address: "0x252d447c54f33e033ad04048baeade7628cb1274",
        sender_address_label: null,
        sender_logo_url: "https://logos.covalenthq.com/tokens/1/0x252d447c54f33e033ad04048baeade7628cb1274.png",
        raw_log_data:
          "0x0000000000000000000000008d7a5fedf55b68625b2e5953f8203b029cb9c44e000000000000000000000000000000000000000000000002cbad511038056fed000000000000000000000000000000000000000000000000000005507cd29e6b",
        decoded: {
          name: "Redeem",
          signature: "Redeem(address redeemer, uint256 redeemAmount, uint256 redeemTokens)",
          params: [
            {
              name: "redeemer",
              type: "address",
              indexed: false,
              decoded: true,
              value: "0xDd1E5f42baA201050c4686FDF4e3FDE16A58BC6F",
            },
            {
              name: "redeemAmount",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "51569964038190624749",
            },
            {
              name: "redeemTokens",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "5843249700459",
            },
          ],
        },
      },
      {
        block_signed_at: "2022-01-29T22:42:17Z",
        block_height: 14103441,
        tx_offset: 57,
        log_offset: 125,
        tx_hash: "",
        raw_log_topics: [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000008d7a5fedf55b68625b2e5953f8203b029cb9c44e",
          "0x000000000000000000000000252d447c54f33e033ad04048baeade7628cb1274",
        ],
        sender_contract_decimals: 9,
        sender_name: "Fraximalist Money Market Staked Olympus",
        sender_contract_ticker_symbol: "fsOHM-36",
        sender_address: "0x252d447c54f33e033ad04048baeade7628cb1274",
        sender_address_label: null,
        sender_logo_url: "https://logos.covalenthq.com/tokens/1/0x252d447c54f33e033ad04048baeade7628cb1274.png",
        raw_log_data: "0x000000000000000000000000000000000000000000000000000005507cd29e6b",
        decoded: {
          name: "Transfer",
          signature: "Transfer(indexed address from, indexed address to, uint256 value)",
          params: [
            {
              name: "from",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0xDd1E5f42baA201050c4686FDF4e3FDE16A58BC6F",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0x252d447c54f33e033ad04048baeade7628cb1274",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "5843249700459",
            },
          ],
        },
      },
      {
        block_signed_at: "2022-01-29T22:42:17Z",
        block_height: 14103441,
        tx_offset: 57,
        log_offset: 124,
        tx_hash: "",
        raw_log_topics: [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x000000000000000000000000252d447c54f33e033ad04048baeade7628cb1274",
          "0x0000000000000000000000008d7a5fedf55b68625b2e5953f8203b029cb9c44e",
        ],
        sender_contract_decimals: 18,
        sender_name: "Governance AME",
        sender_contract_ticker_symbol: "gOHM",
        sender_address: "0x0ab87046fbb341d058f17cbc4c1133f25a20a52f",
        sender_address_label: null,
        sender_logo_url: "https://logos.covalenthq.com/tokens/0x0ab87046fbb341d058f17cbc4c1133f25a20a52f.png",
        raw_log_data: "0x000000000000000000000000000000000000000000000002cbad511038056fed",
        decoded: {
          name: "Transfer",
          signature: "Transfer(indexed address from, indexed address to, uint256 value)",
          params: [
            {
              name: "from",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0x252d447c54f33e033ad04048baeade7628cb1274",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0xDd1E5f42baA201050c4686FDF4e3FDE16A58BC6F",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "51569964038190624749",
            },
          ],
        },
      },
      {
        block_signed_at: "2022-01-29T22:42:17Z",
        block_height: 14103441,
        tx_offset: 57,
        log_offset: 123,
        tx_hash: "",
        raw_log_topics: ["0x4dec04e750ca11537cabcd8a9eab06494de08da3735bc8871cd41250e190bc04"],
        sender_contract_decimals: 9,
        sender_name: "Fraximalist Money Market Staked Olympus",
        sender_contract_ticker_symbol: "fsOHM-36",
        sender_address: "0x252d447c54f33e033ad04048baeade7628cb1274",
        sender_address_label: null,
        sender_logo_url: "https://logos.covalenthq.com/tokens/1/0x252d447c54f33e033ad04048baeade7628cb1274.png",
        raw_log_data:
          "0x00000000000000000000000000000000000000000000002abdbd4bae014e7c8600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000dfa70e74f5781270000000000000000000000000000000000000000000000000000000000000000",
        decoded: {
          name: "AccrueInterest",
          signature:
            "AccrueInterest(uint256 cashPrior, uint256 interestAccumulated, uint256 borrowIndex, uint256 totalBorrows)",
          params: [
            {
              name: "cashPrior",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "788435418350286175366",
            },
            {
              name: "interestAccumulated",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "0",
            },
            {
              name: "borrowIndex",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "1007241605441618215",
            },
            {
              name: "totalBorrows",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "0",
            },
          ],
        },
      },
    ],
  },
  type: "borrow",
  details: "Supply to Fuse",
  value: new DecimalBigNumber("186075461403", 9),
};

export const stakeTransaction = {
  token: {
    name: "AME",
    addresses: {
      "1": "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
      "4": "0xd7B98050962ec7cC8D11a83446B3217257C754B7",
    },
    _contractCache: {},
    icons: ["AME"],
    decimals: 9,
    purchaseUrl:
      "https://app.sushi.com/swap?inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f&outputCurrency=0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
  },
  transaction: {
    block_signed_at: "2022-02-23T03:41:38Z",
    block_height: 0,
    tx_hash: "",
    tx_offset: 0,
    successful: true,
    from_address: "0xDd1E5f42baA201050c4686FDF4e3FDE16A58BC6F",
    from_address_label: null,
    to_address: "0xb63cac384247597756545b500253ff8e607a8020",
    to_address_label: null,
    value: "0",
    value_quote: 0,
    gas_offered: 0,
    gas_spent: 0,
    gas_price: 0,
    fees_paid: "0",
    gas_quote: 0,
    gas_quote_rate: 0,
    log_events: [
      {
        block_signed_at: "2022-02-23T03:41:38Z",
        block_height: 0,
        tx_offset: 0,
        log_offset: 0,
        tx_hash: "",
        raw_log_topics: [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x000000000000000000000000b63cac384247597756545b500253ff8e607a8020",
          "0x00000000000000000000000039e606af0bd163cb87a33283e452a40829ab2297",
        ],
        sender_contract_decimals: 9,
        sender_name: "Staked AME",
        sender_contract_ticker_symbol: "sOHM",
        sender_address: "0x04906695d6d12cf5459975d7c3c03356e4ccd460",
        sender_address_label: null,
        sender_logo_url: "https://logos.covalenthq.com/tokens/1/0x04906695d6d12cf5459975d7c3c03356e4ccd460.png",
        raw_log_data: "0x0000000000000000000000000000000000000000000000000000002b52f6371b",
        decoded: {
          name: "Transfer",
          signature: "Transfer(indexed address from, indexed address to, uint256 value)",
          params: [
            {
              name: "from",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0xb63cac384247597756545b500253ff8e607a8020",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0xDd1E5f42baA201050c4686FDF4e3FDE16A58BC6F",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "186075461403",
            },
          ],
        },
      },
      {
        block_signed_at: "2022-02-23T03:41:38Z",
        block_height: 0,
        tx_offset: 0,
        log_offset: 0,
        tx_hash: "",
        raw_log_topics: [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x00000000000000000000000039e606af0bd163cb87a33283e452a40829ab2297",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
        ],
        sender_contract_decimals: 18,
        sender_name: "Governance AME",
        sender_contract_ticker_symbol: "gOHM",
        sender_address: "0x0ab87046fbb341d058f17cbc4c1133f25a20a52f",
        sender_address_label: null,
        sender_logo_url: "https://logos.covalenthq.com/tokens/1/0x0ab87046fbb341d058f17cbc4c1133f25a20a52f.png",
        raw_log_data: "0x0000000000000000000000000000000000000000000000001dd6559bdb170000",
        decoded: {
          name: "Transfer",
          signature: "Transfer(indexed address from, indexed address to, uint256 value)",
          params: [
            {
              name: "from",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0xDd1E5f42baA201050c4686FDF4e3FDE16A58BC6F",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0x0000000000000000000000000000000000000000",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "2150000000000000000",
            },
          ],
        },
      },
    ],
  },
  type: "staking",
  details: "Stake",
  value: new DecimalBigNumber("186075461403", 9),
};

export const unstakeTransaction = {
  token: {
    name: "AME",
    addresses: {
      "1": "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
      "4": "0xd7B98050962ec7cC8D11a83446B3217257C754B7",
    },
    _contractCache: {},
    icons: ["AME"],
    decimals: 9,
    purchaseUrl:
      "https://app.sushi.com/swap?inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f&outputCurrency=0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
  },
  transaction: {
    block_signed_at: "2022-04-11T04:37:00Z",
    block_height: 0,
    tx_hash: "",
    tx_offset: 78,
    successful: true,
    from_address: "0xDd1E5f42baA201050c4686FDF4e3FDE16A58BC6F",
    from_address_label: null,
    to_address: "0xb63cac384247597756545b500253ff8e607a8020",
    to_address_label: null,
    value: "0",
    value_quote: 0,
    gas_offered: 0,
    gas_spent: 0,
    gas_price: 0,
    fees_paid: "3724488498243672",
    gas_quote: 0,
    gas_quote_rate: 0,
    log_events: [
      {
        block_signed_at: "2022-04-11T04:37:00Z",
        block_height: 0,
        tx_offset: 78,
        log_offset: 73,
        tx_hash: "",
        raw_log_topics: [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x000000000000000000000000b63cac384247597756545b500253ff8e607a8020",
          "0x00000000000000000000000039e606af0bd163cb87a33283e452a40829ab2297",
        ],
        sender_contract_decimals: 9,
        sender_name: "Olympus",
        sender_contract_ticker_symbol: "AME",
        sender_address: "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
        sender_address_label: null,
        sender_logo_url: "https://logos.covalenthq.com/tokens/1/0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5.png",
        raw_log_data: "0x0000000000000000000000000000000000000000000000000000004bf441aa30",
        decoded: {
          name: "Transfer",
          signature: "Transfer(indexed address from, indexed address to, uint256 value)",
          params: [
            {
              name: "from",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0xb63cac384247597756545b500253ff8e607a8020",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              decoded: true,
              value: "0xDd1E5f42baA201050c4686FDF4e3FDE16A58BC6F",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              decoded: true,
              value: "326220491312",
            },
          ],
        },
      },
    ],
  },
  type: "staking",
  details: "Unstake",
  value: new DecimalBigNumber("186075461403", 9),
};
