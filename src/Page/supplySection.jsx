import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

export const SupplySection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="relative bg-[#1E81B0] pb-[50px] overflow-hidden">
      <div
        className="elementor-shape elementor-shape-top absolute overflow-hidden top-[-1px] w-full"
        data-negative="false"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="xMidYMax slice">
          <path
            className="elementor-shape-fill"
            d="M0 0v6.7c1.9-.8 4.7-1.4 8.5-1 9.5 1.1 11.1 6 11.1 6s2.1-.7 4.3-.2c2.1.5 2.8 2.6 2.8 2.6s.2-.5 1.4-.7c1.2-.2 1.7.2 1.7.2s0-2.1 1.9-2.8c1.9-.7 3.6.7 3.6.7s.7-2.9 3.1-4.1 4.7 0 4.7 0 1.2-.5 2.4 0 1.7 1.4 1.7 1.4h1.4c.7 0 1.2.7 1.2.7s.8-1.8 4-2.2c3.5-.4 5.3 2.4 6.2 4.4.4-.4 1-.7 1.8-.9 2.8-.7 4 .7 4 .7s1.7-5 11.1-6c9.5-1.1 12.3 3.9 12.3 3.9s1.2-4.8 5.7-5.7c4.5-.9 6.8 1.8 6.8 1.8s.6-.6 1.5-.9c.9-.2 1.9-.2 1.9-.2s5.2-6.4 12.6-3.3c7.3 3.1 4.7 9 4.7 9s1.9-.9 4 0 2.8 2.4 2.8 2.4 1.9-1.2 4.5-1.2 4.3 1.2 4.3 1.2.2-1 1.4-1.7 2.1-.7 2.1-.7-.5-3.1 2.1-5.5 5.7-1.4 5.7-1.4 1.5-2.3 4.2-1.1c2.7 1.2 1.7 5.2 1.7 5.2s.3-.1 1.3.5c.5.4.8.8.9 1.1.5-1.4 2.4-5.8 8.4-4 7.1 2.1 3.5 8.9 3.5 8.9s.8-.4 2 0 1.1 1.1 1.1 1.1 1.1-1.1 2.3-1.1 2.1.5 2.1.5 1.9-3.6 6.2-1.2 1.9 6.4 1.9 6.4 2.6-2.4 7.4 0c3.4 1.7 3.9 4.9 3.9 4.9s3.3-6.9 10.4-7.9 11.5 2.6 11.5 2.6.8 0 1.2.2c.4.2.9.9.9.9s4.4-3.1 8.3.2c1.9 1.7 1.5 5 1.5 5s.3-1.1 1.6-1.4c1.3-.3 2.3.2 2.3.2s-.1-1.2.5-1.9 1.9-.9 1.9-.9-4.7-9.3 4.4-13.4c5.6-2.5 9.2.9 9.2.9s5-6.2 15.9-6.2 16.1 8.1 16.1 8.1.7-.2 1.6-.4V0H0z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
      <div
        className="absolute bottom-[-1px] w-full overflow-hidden"
        style={{ transform: 'rotate(180deg)' }}
        data-negative="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          style={{ position: 'relative', zIndex: '-1' }}
          preserveAspectRatio="none"
        >
          <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z" fill="#FFFFFF"></path>
        </svg>{' '}
      </div>
      <div className="container mx-auto px-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-[64px] items-center  ">
          <div className="contentt md:pl-[27px]">
            <h1 className="text-white text-[27px] font-normal roboto" data-aos="fade-right">
              Limited Supply & Strategic Token Burn: Enhancing Dolphin Token Value
            </h1>
            <h4
              className="woodmart-title-container py-2 title wd-fontsize-l text-[#242424] text-[22px] poppins font-semibold"
              data-aos="fade-right"
            >
              ONLY <u> 77,777,777 </u> tokens for Dolphin MEME will ever exist!
            </h4>
            <div className=" font-normal poppins text-[17px] text-white" data-aos="fade-right">
              Burning of Dolphin Token Sales
              <br />
              At Dolphin, we are committed to creating a sustainable and thriving ecosystem for our token holders. To
              achieve this, we have implemented a unique token management strategy: the Dolphin Token Burn.
              <br />
              <br />
            </div>
            <div className="mt-5">
              <button className="bg-[#F3F3F3] min-h-[42px] relative z-1 text-[#3E3E3E] font-semibold py-[5px] px-[20px] text-[13px] border-none">
                READ MORE
              </button>
            </div>
          </div>
          <div className="" data-aos="fade-left">
            <img
              src="/assets/IMG_7930-768x768-1.webp"
              className="md:max-w-[479px] max-w-full w-full h-auto rounded-[300px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
