import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { Link as ScrollLink } from 'react-scroll';

export const UnleashSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="overflow-hidden">
      <div
        className="pt-[100px]"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 68%, #2596BE 100%)',
        }}
      >
        <div style={{ transform: 'rotate(180deg)' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="elementor-shape-fill"
              opacity="0.33"
              d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
              fill="#2596BE"
            ></path>
            <path
              className="elementor-shape-fill"
              opacity="0.66"
              d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
              fill="#2596BE"
            ></path>
            <path
              className="elementor-shape-fill"
              d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
              fill="#2596BE"
            ></path>
          </svg>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 283.5 27.8"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          className="elementor-shape-fill"
          d="M0 0v6.7c1.9-.8 4.7-1.4 8.5-1 9.5 1.1 11.1 6 11.1 6s2.1-.7 4.3-.2c2.1.5 2.8 2.6 2.8 2.6s.2-.5 1.4-.7c1.2-.2 1.7.2 1.7.2s0-2.1 1.9-2.8c1.9-.7 3.6.7 3.6.7s.7-2.9 3.1-4.1 4.7 0 4.7 0 1.2-.5 2.4 0 1.7 1.4 1.7 1.4h1.4c.7 0 1.2.7 1.2.7s.8-1.8 4-2.2c3.5-.4 5.3 2.4 6.2 4.4.4-.4 1-.7 1.8-.9 2.8-.7 4 .7 4 .7s1.7-5 11.1-6c9.5-1.1 12.3 3.9 12.3 3.9s1.2-4.8 5.7-5.7c4.5-.9 6.8 1.8 6.8 1.8s.6-.6 1.5-.9c.9-.2 1.9-.2 1.9-.2s5.2-6.4 12.6-3.3c7.3 3.1 4.7 9 4.7 9s1.9-.9 4 0 2.8 2.4 2.8 2.4 1.9-1.2 4.5-1.2 4.3 1.2 4.3 1.2.2-1 1.4-1.7 2.1-.7 2.1-.7-.5-3.1 2.1-5.5 5.7-1.4 5.7-1.4 1.5-2.3 4.2-1.1c2.7 1.2 1.7 5.2 1.7 5.2s.3-.1 1.3.5c.5.4.8.8.9 1.1.5-1.4 2.4-5.8 8.4-4 7.1 2.1 3.5 8.9 3.5 8.9s.8-.4 2 0 1.1 1.1 1.1 1.1 1.1-1.1 2.3-1.1 2.1.5 2.1.5 1.9-3.6 6.2-1.2 1.9 6.4 1.9 6.4 2.6-2.4 7.4 0c3.4 1.7 3.9 4.9 3.9 4.9s3.3-6.9 10.4-7.9 11.5 2.6 11.5 2.6.8 0 1.2.2c.4.2.9.9.9.9s4.4-3.1 8.3.2c1.9 1.7 1.5 5 1.5 5s.3-1.1 1.6-1.4c1.3-.3 2.3.2 2.3.2s-.1-1.2.5-1.9 1.9-.9 1.9-.9-4.7-9.3 4.4-13.4c5.6-2.5 9.2.9 9.2.9s5-6.2 15.9-6.2 16.1 8.1 16.1 8.1.7-.2 1.6-.4V0H0z"
          fill="#2596BE"
        ></path>
      </svg>
      <div className="container mx-auto max-w-full w-full lg:max-w-[1140px]  px-[20px] ">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
          <div>
            <h4 className="woodmart-title-container  text-[36px] text-[#242424] poppins font-semibold">
              Unleash the Power of Dolphin Meme Tokens at the exclusive Kahoo
              Store
            </h4>
          </div>
          <div className="elementor-widget-container">
            <span
              style={{ color: '#2596be' }}
              className="text-[19px] poppins font-normal"
            >
              Why just hold your tokens when you can shop with them? Dive into
              the future of e-commerce with Dolphin tokens (DOL) at the Kahoo
              Store, the premier online marketplace for sports apparel and
              equipment.
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 py-10 gap-10 md:grid-cols-2 items-start  ">
          <div
            className="bg-[#1E81B0] md:w-[510px]  w-full hover:bg-[#666666] transition-all p-[30px] flex gap-[20px] rounded-[5px]"
            data-aos="fade-right"
            style={{ boxShadow: '2px 3px 14px transparent' }}
          >
            <div className="flex-shrink-0 w-[70px] h-[56px]">
              <img
                src="/assets/Untitled-removebg-preview-1-1-70x56.webp"
                className="w-full h-full object-contain"
                alt=""
              />
            </div>

            <div>
              <h4
                className="text-white sue text-[35px] leading-1 font-semibold"
                data-elementor-setting-key="title"
              >
                Seamless Shopping with Dolphin <br /> Tokens
              </h4>
              <div className="elementor-widget-container roboto">
                <strong>
                  <span className="text-white">
                    At the Kahoo Store, we’re revolutionizing online shopping by
                    integrating Dolphin tokens as the exclusive preferred
                    payment method.
                  </span>
                </strong>
              </div>
              <div className="mt-3">
                <ScrollLink to="contact" smooth={true} duration={500}>
                  <button
                    className="bg-[#F3F3F3] min-h-[42px] font-semibold text-[#3E3E3E] py-[5px] px-[20px] text-[13px] border-none"
                    // onClick={scrollToTop}
                  >
                    CONTACT US
                  </button>
                </ScrollLink>
              </div>
            </div>
          </div>
          <div
            className="bg-[#1E81B0] md:w-[510px] w-full hover:bg-[#666666] transition-all p-[30px] flex gap-[20px] rounded-[5px]"
            data-aos="fade-left"
            style={{ boxShadow: '2px 3px 14px transparent' }}
          >
            <div className="flex-shrink-0 w-[70px] h-[56px]">
              <img
                src="/assets/IMG_7929-removebg-preview.webp"
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <div>
              <h4
                className="text-white sue text-[35px] leading-1 font-semibold"
                data-elementor-setting-key="title"
              >
                Exclusive Discounts and Rewards
              </h4>
              <div className="elementor-widget-container roboto">
                <strong>
                  <span className="text-white">
                    At the Kahoo Store, we’re revolutionizing online shopping by
                    integrating Dolphin tokens as the exclusive preferred
                    payment method.
                  </span>
                </strong>
              </div>
              <div className="mt-3">
                <a href="https://www.kahoostore.com/" target="_blank">
                  <button className="bg-[#F3F3F3] min-h-[42px] lato font-semibold text-[#3E3E3E] py-[5px] px-[20px] text-[13px] border-none">
                    Shop Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
