import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import 'aos/dist/aos.css';

export const HowWorks = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="py-[40px] overflow-hidden">
      <div className="container mx-auto px-[20px] ">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
          <div
            className="bg-[#1E81B0] md:w-[510px] mx-auto w-full hover:bg-[#666666] transition-all p-[30px] flex gap-[20px] rounded-[5px]"
            data-aos="fade-right"
            style={{ boxShadow: '2px 3px 14px transparent' }}
          >
            <div>
              <h4
                className="text-white sue text-[35px] leading-1 font-semibold"
                data-elementor-setting-key="title"
              >
                How It Works
              </h4>
              <div className="elementor-widget-container roboto">
                <strong>
                  <span className="text-white">
                    As part of this innovative approach, sales generated from
                    purchases made with our meme token, Dolphin Tokens, are
                    systematically removed from circulation. This burning
                    mechanism reduces the overall supply of tokens, directly
                    contributing to their increased value and market security.
                  </span>
                </strong>
              </div>
              <div className="mt-3">
                <ScrollLink to="contact" smooth={true} duration={500}>
                  <button className="bg-[#F3F3F3] min-h-[44px] font-semibold text-[#3E3E3E] py-[5px] px-[20px] text-[13px] border-none">
                    CONTACT US
                  </button>
                </ScrollLink>
              </div>
            </div>
          </div>
          <div
            className="bg-[#1E81B0] md:w-[510px] w-full mx-auto hover:bg-[#666666] transition-all p-[30px] flex gap-[20px] rounded-[5px]"
            data-aos="fade-left"
            style={{ boxShadow: '2px 3px 14px transparent' }}
          >
            <div>
              <h4
                className="text-white sue text-[35px] leading-1 font-semibold"
                data-elementor-setting-key="title"
              >
                Benefits of the Dolphin Token Burn
              </h4>
              <div className="elementor-widget-container roboto">
                <strong>
                  <span className="text-white">
                    <p>
                      &gt; Value Enhancement: By reducing the supply, each
                      <br />
                      remaining token becomes more valuable.
                      <br />
                      &gt; Market Security: A smaller token supply helps
                      stabilize the market, providing a secure investment
                      environment.
                      <br />
                      &gt; Sustainable Growth: This strategy ensures long-term
                      <br />
                      growth and stability within the Dolphin community.
                    </p>
                  </span>
                </strong>
              </div>
              <div className="mt-3">
              <ScrollLink to="contact" smooth={true} duration={500}>
                <button className="bg-[#F3F3F3] min-h-[44px] font-semibold text-[#3E3E3E] py-[5px] px-[20px] text-[13px] border-none">
                  CONTACT US
                </button>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
