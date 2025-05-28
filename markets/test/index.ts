import {
  rateStrategyStableOne,
  rateStrategyStableTwo,
  rateStrategyVolatileOne,
} from "./rateStrategies";
import { ZERO_ADDRESS } from "../../helpers";
import {
  IAaveConfiguration,
  eEthereumNetwork,
  eArbitrumNetwork,
  eMonadNetwork,
} from "../../helpers/types";

import { CommonsConfig } from "./commons";
import {
  strategyDAI,
  strategyUSDC,
  strategyAAVE,
  strategyLINK,
  strategyWETH,
} from "./reservesConfigs";

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const AaveMarket: IAaveConfiguration = {
  ...CommonsConfig,
  MarketId: "Testnet Aave Market",
  ProviderId: 8080,
  ReservesConfig: {
    // AAVE: strategyAAVE,
    DAI: strategyDAI,
    USDC: strategyUSDC,
    WETH: strategyWETH,
    // LINK: strategyLINK,
  },
  ReserveAssets: {
    [eEthereumNetwork.main]: {
      // AAVE: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
      DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      // LINK: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    },
    // [eEthereumNetwork.kovan]: {
    //   AAVE: ZERO_ADDRESS,
    //   DAI: ZERO_ADDRESS,
    //   USDC: ZERO_ADDRESS,
    //   WETH: ZERO_ADDRESS,
    //   LINK: ZERO_ADDRESS,
    // },
    // [eArbitrumNetwork.arbitrumTestnet]: {
    //   AAVE: ZERO_ADDRESS,
    //   DAI: ZERO_ADDRESS,
    //   USDC: ZERO_ADDRESS,
    //   WETH: ZERO_ADDRESS,
    //   LINK: ZERO_ADDRESS,
    // },
    // [eEthereumNetwork.rinkeby]: {
    //   AAVE: ZERO_ADDRESS,
    //   DAI: ZERO_ADDRESS,
    //   USDC: ZERO_ADDRESS,
    //   WETH: ZERO_ADDRESS,
    //   LINK: ZERO_ADDRESS,
    // },
    [eMonadNetwork.testnet]: {
      USDC: "0x70BB0758a38ae43418ffcEd9A25273dd4e804D15",
      WETH: "0x0c76859E85727683Eeba0C70Bc2e0F5781337818",
      WBTC: "0x2Cd9D7E85494F68F5aF08EF96d6FD5e8F71B4d31",
      USDT: "0x14eE6bE30A91989851Dc23203E41C804D4D71441",
    },
  },
};

export default AaveMarket;
