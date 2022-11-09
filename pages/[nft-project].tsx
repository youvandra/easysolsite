import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import type { NextPage } from "next";
import Claim from "../components/Claim";

// Default styles that can be overridden by your app
const Home: NextPage = () => {
    return(
      <div>
        <Claim />
      </div>
    )
};

export default Home;
