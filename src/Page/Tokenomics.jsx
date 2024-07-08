import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

const listItems = [
  { id: '4dc2a80', content: '6% Airdrop:' },
  { id: '763c11e', content: '5% Charity:' },
  { id: 'e9dd09a', content: '10% Marketing / Future Development' },
  { id: 'c502e2b', content: '10% Liquidity pool:' },
  { id: '0ffc6a4', content: '34% Pre-sale:' },
  { id: '50aaa13', content: '10% Team:' },
  { id: '4544d83', content: '25% Public sale:' },
];
export const Tokenomics = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="py-[40px] overflow-hidden">
      <div className="text-center">
        <h1 className="text-[22px] md:text-[41px] text-[#242424] poppins font-semibold mb-[10px]">Tokenomics</h1>
        <p className="text-[14px] roboto" style={{ color: 'rgb(119, 119, 119)' }}>
          Dolphin (DOL) token distribution is as follows:
        </p>
      </div>
      <div className="container mx-auto max-w-full w-full lg:max-w-[1140px]  px-[20px] pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="" data-aos="fade-right">
            <img src="/assets/IMG_7959-768x412-1.webp" className="max-w-full w-full h-auto" alt="" />
          </div>
          <div data-aos="fade-left">
            <ul className="list-none text-[14px]">
              {listItems.map((item) => (
                <li className="flex gap-[10px] mb-[15px] relative items-center transition-all">
                  <svg
                    className="list-icon wd-icon e-font-icon-svg e-fas-star"
                    viewBox="0 0 576 512"
                    xmlns="http://www.w3.org/2000/svg"
                    width={'1rem'}
                    height={'1rem'}
                  >
                    <path
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      fill="#2C2C2C"
                    ></path>
                  </svg>
                  <span className=" roboto text-[19px] " style={{ color: 'rgb(119, 119, 119)' }}>
                    {item.content}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
