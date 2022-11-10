import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ThirdwebProvider } from "@thirdweb-dev/react/solana";
import { Network } from "@thirdweb-dev/sdk/solana";
import type { AppProps } from "next/app";
import "../styles/globals.css";
require("@solana/wallet-adapter-react-ui/styles.css");
// Change the network to the one you want to use: "mainnet-beta", "testnet", "devnet", "localhost" or your own RPC endpoint

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider network={'devnet'}>
      <WalletModalProvider>
        <Component {...pageProps} />
      </WalletModalProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
