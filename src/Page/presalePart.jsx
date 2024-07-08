import React from 'react';
import { BuyClaim } from './buyClaim';
const social = [
  // {
  //   id: 1,
  //   img: '/assets/fb.png',
  //   bg: '#365493',
  // },
  {
    id: 1,
    img: '/assets/x.png',
    bg: '#000',
    link: 'https://x.com/DolphinSolana24',
  },
  {
    id: 2,
    img: '/assets/insta.png',
    bg: '#774430',
    link: 'https://www.instagram.com/dolphinsolana/',
  },
  {
    id: 3,
    img: '/assets/youtube.png',
    bg: '#CB2027',
    link: 'https://www.youtube.com/@DolphinSolana/featured',
  },
  {
    id: 4,
    img: '/assets/tik-tok.png',
    bg: '#010101',
    link: 'https://www.tiktok.com/@dolphinsolana',
  },
  {
    id: 5,
    img: '/assets/telegram.png',
    bg: '#37AEE2',
    link: 'https://t.me/DolphinSolana1',
  },
];
export const Presale = () => {
  return (
    <div className="pt-[150px]">
      <div className="container mx-auto px-[15px] py-[40px] lg:px-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2  ">
          <div className="content">
            <div>
              <BuyClaim />
            </div>
            <h4 className="neon text-black text-[34px] font-semibold leading-1">
              What is a Presale?
            </h4>
            <div className="">
              <h5 className="text-[#242424] poppins text-[16px] font-semibold mb-[10px]">
                {' '}
                A presale represents a unique opportunity in the cryptocurrency
                realm where investors are granted the chance to purchase a new
                token or cryptocurrency before its official release to the
                broader market.{' '}
              </h5>
              <h5 className="text-[#242424] poppins text-[16px] font-semibold mb-[10px]">
                This early access phase allows participants to invest in a
                project's potential from its inception..{' '}
              </h5>
              <h5 className="text-[#242424] poppins text-[16px] font-semibold mb-[10px]">
                The presale will be open until the hard cap is reached, which is
                13.5 million USD. The soft cap for the presale is 6 million USD.
                The total presale for Dolphin tokens will be 26.6 million
                tokens, which constitute 34% of the total supply. In addition, a
                6% airdrop will raise the actual total presale to 40% of the
                supply. Each 4.5 million USD raised will correspond to a
                different token price, starting at $0.487 for the first stage of
                4.5 million tokens and increasing by 4% in each subsequent
                stage.{' '}
              </h5>
              <h4 className="neon text-black text-[34px] font-semibold leading-1">
                Airdrop:
              </h4>
              <h5 className="text-[#242424] poppins text-[16px] font-semibold mb-[10px]">
                Each person who purchases $1,000 or more will receive a portion
                of the 6% airdrop. The more they purchase, the larger their
                portion of the airdrop.{' '}
              </h5>
              <h4 className="neon text-black text-[34px] font-semibold leading-1">
                Presale Token Claiming:
              </h4>
              <h5 className="text-[#242424] poppins text-[16px] font-semibold mb-[10px]">
                To ensure a fair launch for the Dolphin token, presale buyers
                will be able to claim their tokens from the website at the same
                time as the DEX listing.{' '}
              </h5>
            </div>
          </div>
          <div className="fish-img">
            <img
              src="/assets/fish.png"
              className="max-w-full w-full h-auto"
              alt=""
            />
            <div className="flex gap-3 items-center justify-center">
              <h1 className="text-black text-[14px] font-semibold poppins">
                Follow ;
              </h1>
              <div className="flex gap-3 items-center">
                {social.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    className={`w-[40px] h-[40px]   flex justify-center items-center rounded-[5px] gap-2`}
                    style={{ background: social.bg }}
                  >
                    <img src={social.img} className="w-[16px] h-auto" alt="" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col fixed right-0 top-[30%] z-30">
        {social.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            className={`w-[40px] h-[40px]   flex justify-center items-center  `}
            style={{ background: social.bg }}
          >
            <img src={social.img} className="w-[16px] h-auto" alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};
