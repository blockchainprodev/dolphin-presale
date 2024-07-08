import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletConnectProvider } from './providers/WalletConnectProvider';
import ThemeContext from './context/themeContext';
import '@solana/wallet-adapter-react-ui/styles.css';
import { Main } from './Page/Main';
import { Header } from './components/Layout/Header';
import SOL from './assets/sol.svg';
import USDC from './assets/usdc.svg';
import USDT from './assets/usdt.png';

function App() {
  const tokens = [
    { ft: 'SOL', icon: SOL },
    // { ft: "JUP", icon: JUP },
    { ft: 'USDT', icon: USDT },
    { ft: 'USDC', icon: USDC },
  ];

  return (
    <>
      <ThemeContext.Provider value={tokens}>
        <WalletConnectProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </Router>
          <ToastContainer
            autoClose={3000}
            draggableDirection="x"
            toastStyle={{ backgroundColor: 'rgba(2,153,255)', color: 'white' }}
          />
        </WalletConnectProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
