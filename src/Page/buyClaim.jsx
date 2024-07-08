import { useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';
import {
  useConnection,
  useWallet,
  useAnchorWallet,
} from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import * as splToken from '@solana/spl-token';
import ThemeContext from '../context/themeContext';
import * as anchor from '@project-serum/anchor';
import { BN } from '@project-serum/anchor';
import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey';
import { IDL } from '../idl/token_presale';
import { utf8 } from '@project-serum/anchor/dist/cjs/utils/bytes';

import {
  PRESALE_PROGRAM_PUBKEY,
  PRESALE_AUTHORITY,
  PRESALE_STATE_SEED,
  USER_STATE_SEED,
  GLOBAL_STATE_SEED,
  PROGRAM_ID,
  TOKEN_PUBKEY,
  USDT_TOKEN_PUBKEY,
  USDC_TOKEN_PUBKEY,
  JUP_TOKEN_PUBKEY,
  JUP_PRICEFEED_ID,
  TOKEN_PRESALE_HARDCAP,
  PRICE_PER_TOKEN,
  PRICE_PER_TOKEN1,
  PRICE_PER_TOKEN2,
  MAX_USD_BALANCE,
} from '../constants';
import { numberWithCommas } from '../utils';
import usePresale from '../hooks/usePresale';

export const BuyClaim = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const anchorWallet = useAnchorWallet();
  const tokens = useContext(ThemeContext);
  const [type, setType] = useState('');
  const [balance, setBalance] = useState(0);
  const [quoteAmount, setQuoteAmount] = useState(0);
  const [tokenAmount, setTokenAmount] = useState(0);
  const [totalBuyAmount, setTotalBuyAmount] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);
  const [claimAmount, setClaimedAmount] = useState(0);
  const [ratio, setRatio] = useState(1);
  const [progress, setProgress] = useState(0);
  const [dolPrice, setDolPrice] = useState(PRICE_PER_TOKEN);

  const [copied, setCopied] = useState(false);
  const address = 'Hka5FiEPrWEMqPrXmLuKR9Ymr7J4jU7dh797BZoDjSxq';
  const handleCopy = () => {
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  const {
    createPresale,
    depositToken,
    claimToken,
    withdrawToken,
    buyToken,
    initializeAccount,
    updatePresale,
    getPrice,
    rescuedToken,
    endTime,
  } = usePresale();

  const onInitializeAccount = async () => {
    await initializeAccount();
  };

  const onCreatePresale = async () => {
    await createPresale();
  };

  const onDepositToken = async () => {
    await depositToken();
  };

  const onUpdatePresale = async () => {
    await updatePresale();
  };

  const onRescuedToken = async () => {
    await rescuedToken();
  };
  const handleSelectSOL = () => {
    setType('SOL');
    setQuoteAmount(0);
  };
  const handleSelectUSDT = () => {
    setType('USDT');
    setQuoteAmount(0);
  };
  const handleSelectUSDC = () => {
    setType('USDC');
    setQuoteAmount(0);
  };
  const program = useMemo(() => {
    if (anchorWallet) {
      const provider = new anchor.AnchorProvider(
        connection,
        anchorWallet,
        anchor.AnchorProvider.defaultOptions()
      );
      return new anchor.Program(IDL, PRESALE_PROGRAM_PUBKEY, provider);
    }
  }, [connection, anchorWallet]);

  const getPresaleInfo = async () => {
    if (program) {
      try {
        let globalPDA = await PublicKey.findProgramAddressSync(
          [Buffer.from(GLOBAL_STATE_SEED), PRESALE_AUTHORITY.toBuffer()],
          PROGRAM_ID
        )[0];

        let info = await program.account.globalState.fetchNullable(globalPDA);

        const stage = info.presaleStage - 1;
        if (stage === 0) {
          setDolPrice(0.487);
        } else if (stage === 1) {
          setDolPrice(0.506);
        } else if (stage === 2) {
          setDolPrice(0.527);
        }
        console.log('current stage', stage);
        const presalePDA = await (
          await PublicKey.findProgramAddressSync(
            [Buffer.from(PRESALE_STATE_SEED), Uint8Array.from([stage])],
            PROGRAM_ID
          )
        )[0];
        info = await program.account.presaleState.fetch(presalePDA);

        setTotalBuyAmount(info.soldTokenAmount);

        // console.log('info.soldTokenAmount', info.identifier);
        const userPDA0 = await PublicKey.findProgramAddressSync(
          [
            Buffer.from(USER_STATE_SEED),
            publicKey.toBuffer(),
            Uint8Array.from([stage]),
          ],
          PROGRAM_ID
        )[0];
        info = await program.account.userState.fetch(userPDA0);
        setBuyAmount(info.buyTokenAmount);
        setClaimedAmount(info.claimAmount);
        console.log('info.buyTokenAmount', info.buyTokenAmount);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      await getPresaleInfo();
    }, 2000);
    return () => clearInterval(interval);
  }, [publicKey]);

  useEffect(() => {
    // Calculate the percentage of currentBalance relative to maxBalance
    const percentage = ((totalBuyAmount * dolPrice) / MAX_USD_BALANCE) * 100;
    // Limit the percentage to a maximum of 100% (if currentBalance exceeds maxBalance)
    const limitedPercentage = Math.min(percentage, 100);
    // Set the progress state
    setProgress(limitedPercentage);
  }, [totalBuyAmount]);

  const getBalance = useCallback(async () => {
    if (publicKey && connection) {
      try {
        if (type === 'SOL') {
          const bal = await connection.getBalance(publicKey);
          setBalance(bal / LAMPORTS_PER_SOL);
        } else if (type === 'USDT') {
          const usdtAddress = await splToken.getAssociatedTokenAddress(
            USDT_TOKEN_PUBKEY,
            publicKey
          );
          const usdtDetails = await splToken.getAccount(
            connection,
            usdtAddress
          );
          if (usdtDetails.amount)
            setBalance(Number(usdtDetails.amount) / 1000000);
        } else if (type === 'USDC') {
          const usdcAddress = await splToken.getAssociatedTokenAddress(
            USDC_TOKEN_PUBKEY,
            publicKey
          );
          const usdcDetails = await splToken.getAccount(
            connection,
            usdcAddress
          );
          if (usdcDetails.amount)
            setBalance(Number(usdcDetails.amount) / 1000000);
        }
      } catch (e) {
        setBalance(0);
        console.log(e);
      }
    }
  }, [publicKey, type]);

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  const _setRatio = useCallback(async () => {
    const price = await getPrice(type);
    console.log('price', price);
    if (price) setRatio(parseFloat(price / dolPrice));
    else setRatio(0);
  }, [type, publicKey]);

  useEffect(() => {
    _setRatio();
  }, [_setRatio]);

  useEffect(() => {
    setTokenAmount(quoteAmount * ratio);
  }, [quoteAmount, ratio]);

  const onBuyToken = async () => {
    if (balance < quoteAmount) {
      toast.warning('Please check balance again.');
      return;
    }
    if (type === '') return;
    // if (type === 'SOL') {
    //   buyToken(quoteAmount);
    // } else {
    //   if (type === 'USDT') {
    //     depositToken(USDT_TOKEN_PUBKEY, JUP_PRICEFEED_ID, quoteAmount);
    //   } else if (type === 'USDC') {
    //     depositToken(USDC_TOKEN_PUBKEY, JUP_PRICEFEED_ID, quoteAmount);
    //   }
    // }
    buyToken(quoteAmount, type);
  };
  const onClaimToken = () => {
    const current = Date.now();

    if (current < endTime * 1000) {
      toast.error('The presale period has not expired');
    } else {
      claimToken();
    }
  };

  const handleOnChange = (e) => {
    if (Number(e.target.value) >= 0) {
      setQuoteAmount(e.target.value);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(walletAddress)
      .then(() => {
        alert('Wallet address copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className="poppins">
      <div className="py-4 px-6 mt-4" style={{ border: '3px solid #229ed2' }}>
        {publicKey && publicKey.toBase58() === PRESALE_AUTHORITY.toBase58() && (
          <div className="grid items-center grid-cols-3 gap-2 mb-5 z-10 relative">
            <button
              className="px-5 py-2 bg-[#0066FF] rounded-full text-[#eff3f6] font-inter text-sm font-bold"
              onClick={onInitializeAccount}
            >
              Initialize Account
            </button>
            <button
              className="px-5 py-2 bg-[#0066FF] rounded-full text-[#eff3f6] font-inter text-sm font-bold"
              onClick={onCreatePresale}
            >
              Create Presale
            </button>
            <button
              className="px-5 py-2 bg-[#0066FF] rounded-full text-[#eff3f6] font-inter text-sm font-bold"
              onClick={() => onDepositToken()}
            >
              Deposit DOL Token
            </button>
            <button
              className="px-5 py-2 bg-[#0066FF] rounded-full text-[#eff3f6] font-inter text-sm font-bold"
              onClick={() => onUpdatePresale()}
            >
              End Presale
            </button>
            {/* <button
              className="px-5 py-2 bg-[#0066FF] rounded-full text-[#eff3f6] font-inter text-sm font-bold"
              onClick={() => onRescuedToken()}
            >
              Rescued Token
            </button> */}
          </div>
        )}

        <h2 className="py-2 mx-auto text-xl font-extrabold tracking-widest text-center">
          Dolphin Presale
        </h2>
        <div className="relative flex items-center w-full border border-[#4b5563] h-8 mb-4  ">
          <div
            id="progress-bar"
            className="scale-x-0 w-full absolute transition-all h-6 bg-[#229ed2] text-xs font-bold flex justify-center items-center origin-left"
            style={{ transform: `scale(${progress / 100}, 1)` }}
          ></div>
          <div className="relative z-20 w-full text-xs font-bold text-center text-black uppercase sm:tracking-widest">
            <span>BUY BEFORE NEXT STAGE PRICE INCREASE</span>
          </div>
        </div>
        <div className=" text-center">
          <h1 className="font-bold text-[1.125rem] text-black">
            $USD RAISED <span> : </span>
          </h1>
          <h1 className="font-bold text-[1.125rem] text-black">
            ${numberWithCommas(totalBuyAmount * dolPrice)}
          </h1>
        </div>
        <div className="flex items-center pt-4 gap-x-2">
          <hr className="border-1 border-[#4b5563] flex-1" />
          <span className="font-bold tracking-widest">
            1 $DOL = ${dolPrice}{' '}
          </span>
          <hr className="border-1 border-[#4b5563] flex-1" />
        </div>
        <div className="mt-8 grid lg:grid-row gap-x-2 gap-y-2 my-2">
          <button
            className={`col-span-4 flex py-2 items-center justify-center gap-x-1 border border-[#4b5563] text-sm font-medium uppercase tracking-widest hover:bg-[#229ed2] hover:text-white ${
              type === 'SOL' ? 'bg-[#229ed2]' : ''
            }`}
            type="button"
            onClick={handleSelectSOL}
          >
            Sol
          </button>
          <button
            className={`col-span-4 flex py-2 items-center justify-center gap-x-1 border border-[#4b5563] text-sm font-medium uppercase tracking-widest hover:bg-[#229ed2] hover:text-white ${
              type === 'USDT' ? 'bg-[#229ed2]' : ''
            }`}
            type="button"
            onClick={handleSelectUSDT}
          >
            USDT
          </button>
          <button
            className={`col-span-4 flex py-2 items-center justify-center gap-x-1 border border-[#4b5563] text-sm font-medium uppercase tracking-widest hover:bg-[#229ed2] hover:text-white ${
              type === 'USDC' ? 'bg-[#229ed2]' : ''
            }`}
            type="button"
            onClick={handleSelectUSDC}
          >
            USDC
          </button>
        </div>
        <div className="relative flex flex-col items-center justify-start w-full h-full gap-2 py-0 pt-2">
          {/* <div className="w-full py-3 text-center cursor-pointer">
            <h4 className="mb-2 text-base">
              Only send SOL, USDT, USDC from hot wallets (eg Phantom) to this address:
            </h4>
            <div
              className="w-full p-2 font-bold text-center truncate border border-[#4b5563]"
              onClick={copyToClipboard}
            >
              Hka5FiEPrWEMqPrXmLuKR9Ymr7J4jU7dh797BZoDjSxq
            </div>
          </div>
          <div className="w-full py-1 my-0 text-center border-primary border-bottom">
            OR
          </div> */}
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-6">
            <label
              for="pay-input"
              className="block  poppins pb-2 text-xs font-bold tracking-wider"
            >
              Buy with {type}
            </label>
            <input
              type="text"
              id="pay-input"
              className="w-full p-4 text-sm text-black bg-transparent outline-[#229ed2] ring-1 ring-gray-600"
              placeholder="0"
              value={quoteAmount}
              onChange={(e) => handleOnChange(e)}
            ></input>
          </div>
          <div className="col-span-6">
            <label
              for="recieve-input"
              className="block pb-2 text-xs font-bold tracking-wider"
            >
              Receive $DOL
            </label>
            <input
              type="text"
              id="recieve-input"
              className="w-full p-4 text-sm text-black bg-transparent outline-[#229ed2] ring-1 ring-gray-600"
              disabled
              value={Number(tokenAmount.toFixed(0))}
            />
          </div>
          <div className="col-span-12 mt-4">
            <div className="py-1 mb-0 border-primary">
              <div className="flex items-center justify-between py-0">
                <span className="text-xs font-bold tracking-widest uppercase text-lightgray">
                  Tokens bought on solana:
                </span>
                <span className="font-semibold">{Number(buyAmount)}</span>
              </div>
            </div>
          </div>
          <div className="col-span-12 mt-4">
            <div className="w-full flex justify-center items-center">
              <button
                className="wallet-adapter-button wallet-adapter-button-trigger hover:bg-[#229ed2] bg-transparent text-black hover:text-white w-full p-[1rem]"
                tabindex="0"
                type="button"
                style={{ border: '1px solid #4b5563' }}
                onClick={onBuyToken}
              >
                BUY NOW
              </button>
            </div>
          </div>
          <div className="col-span-12 mt-4">
            <div className="w-full flex justify-center items-center">
              <button
                className="wallet-adapter-button wallet-adapter-button-trigger hover:bg-[#229ed2] bg-transparent text-black hover:text-white w-full p-[1rem]"
                tabindex="0"
                type="button"
                style={{ border: '1px solid #4b5563' }}
                onClick={onClaimToken}
              >
                CLAIM
              </button>
            </div>
          </div>
        </div>
        <div className=" flex flex-col w-full mt-2 ">
          <h4 className="text-[#242424] font-semibold">
            If you have problem with wallet connection, you can send SOL, USDT,
            USDC from hot wallet(eg phantom) to this address:{' '}
            {/* <strong>Hka5FiEPrWEMqPrXmLuKR9Ymr7J4jU7dh797BZoDjSxq</strong> */}
          </h4>
          <button
            className={`text-black font-bold mt-2 overflow-x-auto ${
              copied ? 'bg-[#8cb0c7]' : ''
            }`}
            type="button"
            style={{
              border: '1px solid #8cb0c7',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              maxWidth: '100%',
            }}
            onClick={handleCopy}
          >
            {copied ? 'COPIED TO CLIPBOARD' : address}
          </button>
        </div>
      </div>
    </div>
  );
};
