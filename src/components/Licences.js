import React from 'react'
import { Link } from 'react-router-dom'
import './LicencesStyle.css'
import { useState } from 'react'
import { ethers, BigNumber } from 'ethers'
import ABI from '../assets/ContractABI.json'

const Licences = () => {
const [walletAddress, setWalletAddress] = useState("");
const [connectBtn, setConnectBtn] = useState("Connect");
const [balance, setBalance] = useState("");
const [amountFounder, setAmountFounder] = useState(1);
const [amountExchanger, setAmountExchanger] = useState(1);
const [amountCraftmaster, setAmountCraftmaster] = useState(1);
const [SupplyF, setSupplyF] = useState(0);
const [SupplyE, setSupplyE] = useState(0);
const [SupplyC, setSupplyC] = useState(0);
const [ErrorMsg, setErrorMsg] = useState(null);

const contractAddress = '0x5Bbe0B903775f4c5cdbB66C237f7AD8590b1C793';

AvailableTokens(0);
AvailableTokens(1);
AvailableTokens(2);
RequestAccounts();

async function RequestAccounts () {

    if(window.ethereum) {
        console.log('detected');
      try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x89' }], // chainId must be in hexadecimal numbers
          });
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        setConnectBtn("Connected");
        } catch (error) {
            setConnectBtn("Try Again");
            if (error.code === 4902) {
                try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                    {
                        chainId: '0x89',
                        chainName: 'Matic(Polygon) Mainnet',
                        nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
                        rpcUrls: ['https://polygon-rpc.com'],
                        blockExplorerUrls: ['https://www.polygonscan.com'],
                    },
                    ],
                });
                    } catch (error) {
                        console.log(error);
                        setConnectBtn("Error Connection");
                    }
                } else {
                alert('Meta Mask not detected');
                }

        }
    }
}

async function AvailableTokens (id){
    
    if(window.ethereum) {

        const buyer = new ethers.providers.Web3Provider(window.ethereum);
        const buyersigner = buyer.getSigner();
        const contract = new ethers.Contract(contractAddress, ABI, buyersigner);

        try {

            const response = await contract.stock(id);
            console.log(response);
            if (id === 0) {
                setSupplyF(response.toNumber());
            }else if (id === 1) {
                setSupplyC(response.toNumber());
            }else if (id === 2) {
                setSupplyE(response.toNumber());
            }
        }catch(err) {
            console.log(err);
        }
    }
    
}

async function MintToken (id, price, amount) {
    if(window.ethereum) {

        const buyer = new ethers.providers.Web3Provider(window.ethereum);
        const buyersigner = buyer.getSigner();
        const contract = new ethers.Contract(contractAddress, ABI, buyersigner);

        try {

            const response = await contract.mint(id,amount,{value: ethers.utils.parseEther((price * amount).toString())});
            console.log(response);
        }catch(err) {
            console.log(err);
            if (err.code === -32603) {
                alert('insufficient fund');
            }
        }
    }
}

  return (
    <div className='licences'>
        <div className='wallet'>
          <button className='btnConnect' onClick={RequestAccounts}>{connectBtn}</button>
          <h3>{walletAddress}</h3>
        </div>
        <div className='licenceTitle'><h1>Available Packages</h1></div>
        <div className='card-container'>
            <div className='card'>
                <h3>Standard</h3>
                <span className='bar'></span>
                <p> Game Access</p>
                <p> Tournament: Pass</p>
                <p> Servers limit: 1</p>
                <p> Crafting: 50 VLM</p>
                <p> Market fees: 5% </p>
                <p> NFT Drop: Monthly</p>
                <p> XP Boost: 7 days</p>
                <h4> Price: 49 Matic</h4>
                <h4> Not available</h4>
            </div>
            <div className='card'>
                <h3>Premium</h3>
                <span className='bar'></span>
                <p> Game Access</p>
                <p> Tournament: Yes</p>
                <p> Servers limit: 5</p>
                <p> Crafting: 35 VLM</p>
                <p> Market fees: 3% </p>
                <p> NFT Drop: 2 Weeks</p>
                <p> Aura: +10% loot</p>
                <h4> Price: 79 Matic</h4>
                <h4> Not available</h4>
            </div>
            <div className='card'>
                <div className='cardexchanger'>
                <h3>Exchanger</h3>
                <p>Available: {SupplyE}</p>
                <span className='bar'></span>
                <p> Game Access</p>
                <p> Tournament: Yes</p>
                <p> Servers limit: 10</p>
                <p> Crafting: 35 VLM</p>
                <p> Market fees: Free </p>
                <p> NFT Drop: Monthly</p>
                <p> Aura: +100% Mining</p>
                <h4> Price: 29 Matic</h4>
                <input className='inputnumber' type="number" onChange={e => setAmountExchanger(e.target.value)} defaultValue={amountExchanger}/>
                <button className='btn' onClick={() => MintToken(2, 29, amountExchanger)} >mint</button>
                </div>
            </div>
            <div className='card'>
                <div className='cardcraftmaster'>
                <h3>CraftMaster</h3>
                <p>Available: {SupplyC}</p>
                <span className='bar'></span>
                <p> Game Access</p>
                <p> Tournament: Yes</p>
                <p> Servers limit: 10</p>
                <p> Crafting: Free</p>
                <p> Market fees: 1% </p>
                <p> NFT Drop: 2 weeks</p>
                <p> Aura: +25% loot</p>
                <h4> Price: 49 Matic</h4>
                <input className='inputnumber' type="number" onChange={e => setAmountCraftmaster(e.target.value)} defaultValue={amountCraftmaster}/>
                <button className='btn' onClick={() => MintToken(1, 49, amountCraftmaster)} >mint</button>
                </div>
            </div>
            <div className='card'>
                <div className='cardfounder'>
                <h3>Founder</h3>
                <p>Available: {SupplyF}</p>
                <span className='bar'></span>
                <p> Game Access</p>
                <p> Tournament: Yes</p>
                <p> Servers limit: 25</p>
                <p> Crafting: 10 VLM</p>
                <p> Market fees: 0.5% </p>
                <p> NFT Drop: 2 weeks</p>
                <p> Aura: +50% loot</p>
                <h4> Price: 79 Matic</h4>
                <input className='inputnumber' type="number" onChange={e => setAmountFounder(e.target.value)} defaultValue={amountFounder}/>
                <button className='btn' onClick={() => MintToken(0, 79, amountFounder)} >mint</button>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Licences