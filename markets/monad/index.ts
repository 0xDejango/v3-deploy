import { eMonadNetwork, IAaveConfiguration } from "./../../helpers/types";
import AaveMarket from "../aave";
import { ZERO_ADDRESS } from "../../helpers";
import { strategyUSDC, strategyWETH, strategyUSDT, strategyWBTC } from "../aave/reservesConfigs";

export const MonadConfig: IAaveConfiguration = {
  ...AaveMarket,
  MarketId: "Monad Market",
  ATokenNamePrefix: "Monad",
  StableDebtTokenNamePrefix: "Monad",
  VariableDebtTokenNamePrefix: "Monad",
  SymbolPrefix: "Mon",
  WrappedNativeTokenSymbol: "WMON",
  ProviderId: 38,
  ReservesConfig: {
    USDC: strategyUSDC,
    USDT: strategyUSDT,
    WETH: strategyWETH,
    WBTC: strategyWBTC,
  },
  ReserveAssets: {
    [eMonadNetwork.main]: {
      USDC: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      WETH: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      // SOL: "",
    },
    [eMonadNetwork.testnet]: {
      USDC: "0xf817257fed379853cDe0fa4F97AB987181B1E5Ea",
      USDT: "0x88b8E2161DEDC77EF4ab7585569D2415a1C1055D",
      WETH: "0xB5a30b0FDc5EA94A52fDc42e3E9760Cb8449Fb37",
      WBTC: "0xcf5a6076cfa32686c0Df13aBaDa2b40dec133F1d",
      // SOL: "0x5387C85A4965769f6B0Df430638a1388493486F1",
    },
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["USDC", "USDT"],
    },
  },
  ChainlinkAggregator: {
    [eMonadNetwork.main]: {
      USDC: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      WETH: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      // SOL: ZERO_ADDRESS,
    },
    [eMonadNetwork.testnet]: {
      USDC: "0x70BB0758a38ae43418ffcEd9A25273dd4e804D15",
      WETH: "0x0c76859E85727683Eeba0C70Bc2e0F5781337818",
      WBTC: "0x2Cd9D7E85494F68F5aF08EF96d6FD5e8F71B4d31",
      USDT: "0x14eE6bE30A91989851Dc23203E41C804D4D71441",
    },
  },
};

export default MonadConfig;
