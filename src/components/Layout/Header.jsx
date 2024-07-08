import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    { id: 'menu-item-84', to: 'home', text: 'Home' },
    { id: 'menu-item-75', to: 'partnership', text: 'Partnership' },
    { id: 'menu-item-228', to: 'sales', text: 'Sales' },
    { id: 'menu-item-229', to: 'about', text: 'About Us' },
    { id: 'menu-item-230', to: 'team', text: 'Team' },
    { id: 'menu-item-231', to: 'buy', text: 'How To Buy' },
    { id: 'menu-item-232', to: 'tokenomics', text: 'Tokenomics' },
    { id: 'menu-item-233', to: 'roadmap', text: 'Roadmap' },
    { id: 'menu-item-234', to: 'faq', text: 'FAQ' },
    {
      id: 'menu-item-280',
      href: '/documents/Dolphin-Meme-Tokens-Whitepaper.pdf',
      text: 'Whitepaper',
      target: '_blank',
    },
    { id: 'menu-item-235', to: 'contact', text: 'Contact Us' },
    { id: 'menu-item-368', href: '#', text: 'Blog' },
  ];

  const social = [
    // { id: 1, img: '/assets/fb.png' },
    { id: 1, img: '/assets/x.png', link: 'https://x.com/DolphinSolana24' },
    {
      id: 2,
      img: '/assets/insta.png',
      link: 'https://www.instagram.com/dolphinsolana/',
    },
    {
      id: 3,
      img: '/assets/youtube.png',
      link: 'https://www.youtube.com/@DolphinSolana/featured',
    },
    {
      id: 4,
      img: '/assets/tik-tok.png',
      link: 'https://www.tiktok.com/@dolphinsolana',
    },
    { id: 5, img: '/assets/telegram.png', link: 'https://t.me/DolphinSolana1' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="fixed z-50 w-full">
      <div className="bg-[#2596be] py-2">
        <div className="flex flex-row justify-center items-center px-[15px] lg:px-0 gap-5">
          <div className="flex flex-row justify-between items-center">
            <div className="logo">
              <img
                src="/assets/video-3.webp"
                className="w-[1004x] h-[104px]"
                alt="Logo"
              />
            </div>
            <div className="px-[10px] hidden lg:block">
              <ul
                className="list-none p-0 m-0 poppins inline-flex flex-wrap justify-center"
                style={{ gap: '1px 20px' }}
              >
                {menuItems.map((menu) => (
                  <li key={menu.id}>
                    {menu.href ? (
                      <a
                        href={menu.href}
                        target={menu.target}
                        className="font-bold text-[16px] capitalize text-[#fff] hover:text-[#ffffffcc]"
                      >
                        {menu.text}
                      </a>
                    ) : (
                      <ScrollLink
                        to={menu.to}
                        smooth={true}
                        duration={500}
                        className="font-bold text-[16px] capitalize text-[#fff] hover:text-[#ffffffcc] cursor-pointer"
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        {menu.text}
                      </ScrollLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:flex flex-wrap justify-center gap-3">
              {social.map((icon) => (
                <a
                  href={social.link}
                  key={icon.id}
                  className="w-[20px] flex items-center justify-center h-[20px]"
                >
                  <img src={icon.img} alt="" />
                </a>
              ))}
            </div>
            <div className="h-9 flex flex-row items-center justify-center pl-[20px]">
              <WalletMultiButton />
            </div>
            <div className="block lg:hidden burger-menu">
              <img
                src="/assets/menu.png"
                className="max-w-full w-full h-auto cursor-pointer"
                alt="Menu"
                onClick={toggleDrawer}
              />
            </div>
          </div>
        </div>
      </div>
      {!isScrolled && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="wd-divider"
          version="1.1"
          width="100%"
          height="6vw"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            className="elementor-shape-fill"
            d="M5,0C1.7,53.3-1.7,53.3-5,0H5z M10,0C6.7,66.7,3.3,66.7,0,0 M15,0C11.7,46.7,8.3,46.7,5,0 M20,0
              c-3.3,60-6.7,60-10,0 M25,0c-3.3,46.7-6.7,46.7-10,0 M30,0c-3.3,73.3-6.7,73.3-10,0 M35,0c-3.3,60-6.7,60-10,0 M40,0
              c-3.3,46.7-6.7,46.7-10,0 M45,0c-3.3,60-6.7,60-10,0 M50,0c-3.3,33.3-6.7,33.3-10,0 M55,0c-3.3,53.3-6.7,53.3-10,0 M60,0
              c-3.3,40-6.7,40-10,0 M65,0c-3.3,26.7-6.7,26.7-10,0 M70,0c-3.3,33.3-6.7,33.3-10,0 M75,0c-3.3,53.3-6.7,53.3-10,0 M80,0
              c-3.3,36.7-6.7,36.7-10,0 M85,0c-3.3,46.7-6.7,46.7-10,0 M90,0c-3.3,53.3-6.7,53.3-10,0 M95,0c-3.3,33.3-6.7,33.3-10,0 M100,0
              c-3.3,50-6.7,50-10,0 M105,0c-3.3,56.7-6.7,56.7-10,0H105z"
            fill="#2596BE"
          />
        </svg>
      )}
      {/* Drawer Component */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col ">
          <div className="border-b flex justify-end border-[#0000001b]">
            <button className="self-end mb-4 p-4 " onClick={toggleDrawer}>
              Close
            </button>
          </div>
          <ul className="list-none p-0 m-0">
            {menuItems.map((menu) => (
              <li
                key={menu.id}
                className="mb-4 px-4 py-2 border-b border-[#0000001b]"
              >
                {menu.href ? (
                  <a
                    href={menu.href}
                    target={menu.target}
                    className="font-semibold   text-[13px] capitalize text-[#333] hover:text-[#2596becc]"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {menu.text}
                  </a>
                ) : (
                  <ScrollLink
                    to={menu.to}
                    smooth={true}
                    duration={500}
                    className="font-semibold text-[13px]   capitalize text-[#333] hover:text-[#2596becc] cursor-pointer"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {menu.text}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap justify-center gap-3">
            {social.map((icon) => (
              <a
                href={social.link}
                key={icon.id}
                className="w-[20px] flex items-center justify-center h-[20px]"
              >
                <img src={icon.img} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Overlay */}

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};
