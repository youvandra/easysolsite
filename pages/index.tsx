import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import type { NextPage } from "next";
import Claim from "../components/Claim";
import React from "react";
// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const Home: NextPage = () => {
    return(
      <div>
      <Claim />
    </div>
    )
};

export default Home;
