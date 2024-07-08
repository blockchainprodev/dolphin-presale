import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

export const Faq = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="py-[40px] overflow-hidden">
      <div className="container mx-auto max-w-full w-full lg:max-w-[1140px]  px-[20px] pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2  ">
          <div className="m-auto" data-aos="fade-left">
            <img src="/assets/IMG_7941-768x768-1-300x300.webp" className="md:max-w-[300px] max-w-full h-auto" alt="" />
          </div>
          <div className="max-w-full md:max-w-[550px] mx-auto w-full ">
            <h1 className="text-[22px] md:text-[41px] text-[#242424] poppins font-semibold mb-[20px]">FAQ</h1>

            <h4 className="text-[#242424] poppins  text-[18px] mb-[20px]">
              <strong>What are Dolphin Meme Tokens?</strong>
            </h4>
            <p className="mb-[20px] lato" style={{ color: 'rgb(119, 119, 119)' }}>
              An innovative new meme style token on Solana with a fixed small supply, burn feature and a true utility
              use case
            </p>
            <h4 className="text-[#242424] poppins  text-[18px] mb-[20px]">
              <strong>How can I get involved with Dolphin?</strong>
            </h4>
            <p className="mb-[20px] lato" style={{ color: 'rgb(119, 119, 119)' }}>
              Follow us on our featured channels, install a Solana wallet to be ready and stay tuned for further launch
              details
            </p>
            <h4 className="text-[#242424] poppins  text-[18px] mb-[20px]">
              <strong>What are the future plans for Dolphin?</strong>
            </h4>
            <p className="mb-[20px] lato" style={{ color: 'rgb(119, 119, 119)' }}>
              We are more than a meme token with our use case for online shopping, and we plan to expand to other use
              cases providing real world value!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
