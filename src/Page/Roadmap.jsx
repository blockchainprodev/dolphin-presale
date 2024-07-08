import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

export const Roadmap = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="py-[40px] overflow-hidden">
      <div className="text-center">
        <h1 className="text-[22px] md:text-[41px] text-[#242424] poppins font-semibold ">
          Roadmap
        </h1>
        <p
          className="text-[17px] roboto"
          style={{ color: 'rgb(119, 119, 119)' }}
        >
          <strong>
            Our roadmap outlines our strategic milestones and objectives for the
            Dolphin project. Here’s what you can expect in the coming months:
          </strong>
        </p>
      </div>
      <div className="container mx-auto max-w-full w-full lg:max-w-[1140px]  px-[20px] pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2  ">
          <div className="max-w-full md:max-w-[550px] mx-auto w-full ">
            <h4 className="text-[#242424] poppins  text-[18px] mb-[20px]">
              <strong>Q2 2024:&nbsp;</strong>
            </h4>
            <p
              className="mb-[20px] lato"
              style={{ color: 'rgb(119, 119, 119)' }}
            >
              Launch of our website &amp; socials Launch of the Kahoo Store
              Social Media Marketing Efforts for Awareness
            </p>
            <h4 className="text-[#242424] poppins  text-[18px] mb-[20px]">
              <strong>Q3 2024 : &nbsp;</strong>
            </h4>
            <p
              className="mb-[20px] lato"
              style={{ color: 'rgb(119, 119, 119)' }}
            >
              Build partnerships & collaborations PRESALE and MAIN sale of
              tokens on Solana AIRDROPS to early adopters and contest winners
              DEX Trading on popular Solana platforms
            </p>
            <h4 className="text-[#242424] poppins  text-[18px] mb-[20px]">
              <strong>Q4 2024: &nbsp;</strong>
            </h4>
            <p
              className="mb-[20px] lato"
              style={{ color: 'rgb(119, 119, 119)' }}
            >
              Expand network of use cases for (DOL) tokens CEX listings for the
              token Continued marketing and collaborations with other projects ,{' '}
              <strong style={{ color: 'black' }}>
                2% of our Dolphin token sales will be allocated to support
                listing the Dolphin project on the Binance Exchange.
              </strong>
            </p>
            <h4 className="text-[#242424] poppins  text-[18px] mb-[20px]">
              <strong>Q1 2025: &nbsp;</strong>
            </h4>
            <p
              className="mb-[20px] lato"
              style={{ color: 'rgb(119, 119, 119)' }}
            >
              Future expansion plans for the DOLPHIN MEME TOKENS!
            </p>
          </div>
          <div className="my-auto" data-aos="fade-left">
            <img
              src="/assets/IMG_7939-768x768-1-300x300.webp"
              className="md:max-w-[300px] max-w-full h-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
