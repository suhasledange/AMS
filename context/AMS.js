import { ethers } from "ethers"
import Web3Modal from 'web3modal'
import ams from '../context/AMS.json'
import { useEffect, useState } from "react";
import React from 'react'

const ContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const ContractABI = ams.abi;


const fetchContract = (signerProvider) =>
    new ethers.Contract(ContractAddress, ContractABI, signerProvider);

const formatEtherValue = (valueInWei) => {
        const ether = valueInWei / 10 ** 18; 
      
        const formattedEther = ether.toFixed(18).replace(/\.?0+$/, '');
      
        return formattedEther;
      };


export const AmsContext = React.createContext();

export const AmsProvider = ({ children }) => {

    const DappName = "AMS Dapp";
    const [currentUser, setCurrentUser] = useState("");
        
    const [themeMode,setThemeMode] = useState("light")

    const getBalance = async () => {
        try {
            checkIfWalletConnected();
            if (!window.ethereum) return "Install Metamask";

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            if (accounts.length) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const balance = await provider.getBalance(accounts[0]);
                const formattedBalance = ethers.utils.formatEther(balance);

                return formattedBalance;
            } else {
                return "No Account";
            }
        } catch (error) {
            console.log("Error getting balance", error);
            return null;
        }
    };

    const createShipment = async (items) => {
        const { receiver, pickupTime, distance, price, weaponName, weaponType, weaponDetails } = items;

        try {
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const contract = fetchContract(signer);
            const createItem = await contract.createShipment(
                receiver,
                new Date(pickupTime).getTime(),
                distance,
                ethers.utils.parseUnits(price, 18),
                weaponName,
                weaponType,
                weaponDetails,
                {
                    value: ethers.utils.parseUnits(price, 18),
                }
            )
            const createItemTx = await createItem;
            const receipt = await createItemTx.wait();
            
        } catch (error) {
            console.log("some went wrong", error);
        }

    };

    const getAllShipment = async () => {
        try {
            
            const provider = new ethers.providers.JsonRpcProvider();
            const contract = fetchContract(provider);

            const shipments = await contract.getAllTransactions();
            const allShipments = shipments.map((shipment) => ({
                sender: shipment.sender,
                receiver: shipment.receiver,
                
                price: formatEtherValue(shipment.Price),
                pickupTime: shipment.pickupTime.toNumber(),
                deliveryTime: shipment.deliveryTime.toNumber(),
                distance: shipment.distance,
                weaponName: shipment.weaponName,
                weaponType: shipment.weaponType,
                weaponDetails: shipment.weaponDetails,
                isPaid: shipment.isPaid,
                status: shipment.status,
            }))
            return allShipments;
        } catch (error) {
            console.log("error getting shipment", error);
        }
    };


    const getAllShipmentCount = async () => {
        try {
          if (!window.ethereum) return "Install Metamask";
      
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
      
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = fetchContract(signer);
      
          const shipmentsCount = await contract.getShipmentsCount(accounts[0]);
          return shipmentsCount.toNumber(); 
        } catch (error) {
          console.log("Error getting shipment count", error);
          return 0;
        }
      };

    const completeShipment = async (completeShip) => {

        const { receiver, index } = completeShip;

        console.log(receiver);
        console.log(index);


        try {
            if (!window.ethereum) return "Install Metamask";

            const accounts = await window.ethereum.request({
                method: "eth_accounts",

            });

            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const contract = fetchContract(signer);
            const transaction = await contract.completeShipment(
                accounts[0],
                receiver,
                index*1, {
                gasLimit: 3000000,
            }
            );
           await transaction.wait();

        } catch (error) {
            console.log("error wrong completeshipment", error);
        }
    };
    const getShipment = async (index) => {

        try {
            if (!window.ethereum) return "Install Metamask";

            const accounts = await window.ethereum.request({
                method: "eth_accounts",

            });
            
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const contract = fetchContract(signer);
            const shipment = await contract.getShipment(accounts[0], index * 1);

            const SingleShipment = {
                sender: shipment[0],
                receiver: shipment[1],
                pickupTime: shipment[2].toNumber(),
                deliveryTime: shipment[3].toNumber(),
                distance: shipment[4].toNumber(),
                
                // price: ethers.utils.formatEther(shipment[5].toString()),
                price: formatEtherValue(shipment[5]),
                weaponName: shipment[6],
                weaponType: shipment[7],
                weaponDetails: shipment[8],
                status: shipment[9],
                isPaid: shipment[10],
            };
            return SingleShipment;

        } catch (error) {
            console.log("error no shipment", error);
        }
    };

    const startShipment = async (getProduct) => {
        const { receiver, index } = getProduct;
        try {
            if (!window.ethereum) return "Install Metamask";

            const accounts = await window.ethereum.request({
                method: "eth_accounts",

            });
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const contract = fetchContract(signer);
            const shipment = await contract.startShipment(
                accounts[0],
                receiver,
                index * 1,{
                gasLimit: 3000000,
                });

            shipment.wait();

            console.log(shipment);

        } catch (error) {
            console.log("sorry no shipments", error);
        }
    };
    const checkIfWalletConnected = async () => {
        try {
            if (!window.ethereum) return "Install Metamask";

            const accounts = await window.ethereum.request({
                method: "eth_accounts",

            });

            if (accounts.length) {
                setCurrentUser(accounts[0]);
            } else {
                return "No Account"
            }
        }
        catch (error) {
            console.log("Not Connected", error);
        }
        
    };

    const connectWallet = async () => {
        try {
            if (!window.ethereum) return "Install Metamask";

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",

            });

            setCurrentUser(accounts[0]);

        } catch (error) {
            console.log("Something went wrong", error);
        }
    }

    useEffect(() => {
        checkIfWalletConnected();

    }, []);

    return (
        <AmsContext.Provider
            value={{
                connectWallet,
                createShipment,
                getAllShipment,
                completeShipment,
                getShipment,
                startShipment,
                getAllShipmentCount,
                getBalance,
                DappName,
                currentUser,
                themeMode,
                setThemeMode,
            }}
        >
            {children}
        </AmsContext.Provider>
    );
}