import { useWallet } from "@solana/wallet-adapter-react";
import { useProgram,useClaimNFT } from "@thirdweb-dev/react/solana";
import { useState }  from "react";
import { useRouter } from 'next/router'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
export default function Claim() {
    
    const { asPath } = useRouter()
    let programAddress = asPath.substring(1)
    const [nftName, setNftName] = useState('')
    const [loading, isLoading] = useState(true)
    const [price, setPrice] = useState('')
    const [supp, setSupp] = useState(0)
    const [image, setImage] = useState('')
    const [programad, setProgramAddress] = useState('')
    fetch("https://concert-app-api.herokuapp.com/api/easy-sol", { method: "GET" }).then(async (res) => {
    
      var json= await res.json()
      for (let i = 0; i < json.length; i++) {
        const item = json[i];
        if (item.program_address == programAddress) {
          setProgramAddress(item.program_address)
          setNftName(item.project_name)
          setPrice(item.price)
          setImage(item.showcase_image)
          isLoading(false)
        }
      }
    })

    // Get the interface for your NFT Drop program
    const wallet = useWallet();
    // Add the address of the contract you deployed earilier on
    // Pasting the programAddress variable and the type of contract
    const program = useProgram(programad, "nft-drop");
    // using the useClaimNFT hook here
    const { mutateAsync: claim, error } = useClaimNFT(program.data);
    const quantityToClaim = 1;

    return (
      <div className='contain'>
        <div className="main_box">
          {/* <h1>{nftName}</h1> */}
          <div className='header'>
            <h1>Claim is live</h1>
          </div>
          <div className='info'>
            <p className='name'>
              {nftName}
            </p>
            <div className='image_block'>
              <img src={image} className='image'/>
            </div>
            <h3 className='text'>{price} SOL/NFT</h3>
            <br></br>
            <WalletMultiButton/>
            {wallet.connected ? (
              <button className='walmart'
              onClick={() => claim({ amount: quantityToClaim })}
              >
                Claim NFT
              </button>
             ) : (
              <button className='walmart'>
                Connect Wallet First
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
