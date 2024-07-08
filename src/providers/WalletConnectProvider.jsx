import { useMemo } from 'react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import {
    Coin98WalletAdapter,
    LedgerWalletAdapter,
    NekoWalletAdapter,
    PhantomWalletAdapter,
    SkyWalletAdapter,
    TokenPocketWalletAdapter,
    UnsafeBurnerWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js'

import { config } from "../config"

export const WalletConnectProvider = ({ children }) => {

    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    // const network = config.isMainnet ? WalletAdapterNetwork.Mainnet : WalletAdapterNetwork.Devnet
    const network = WalletAdapterNetwork.Mainnet

    const endpoint = useMemo(() => {
        if (network === WalletAdapterNetwork.Mainnet) {
            return config.isMainnet ? config.mainNetRpcUrl : config.devNetRpcUrl
            // return 'https://fluent-side-isle.solana-mainnet.quiknode.pro/19a27fc1fa07c0a0aff254ef753b1ba030360b39/'
        }

        return clusterApiUrl(network)
    }, [network])

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new Coin98WalletAdapter(),
            new LedgerWalletAdapter(),
            new NekoWalletAdapter(),
            new SkyWalletAdapter(),
            new TokenPocketWalletAdapter(),
        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}
