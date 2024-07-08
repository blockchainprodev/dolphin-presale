import React from 'react';

export const ComingSoon = () => {
  return (
    <div className="py-[40px] px-[20px]" style={{ background: 'linear-gradient(180deg, #1E81B0 0%, #FFFFFF 61%)' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center  ">
        <div className="">
          <img src="/assets/Untitled-design-72.webp" className="md:max-w-[550px] max-w-full ml-auto" alt="" />
        </div>
        <div>
          <h4 className="sue text-[#401313] text-[22px] font-semibold md:text-[52px] capitalize">
            PRESALE &amp; PUBLIC SALE
          </h4>
          <div className="text-[#0F0F0FCC] text-[28px] capitalize   font-normal">
            <p className="leading-[40px] lato py-3">
              <strong>COMING SOON.</strong>
              <br />
              <strong>
                STAY TUNED FOR HOW TO BUY OUR <br /> TOKENS!
              </strong>
            </p>
            <h6 className="text-[12px]">
              <strong>
                For now ensure you – Set up a cryptocurrency wallet that supports Solana-based tokens, such as
              </strong>
            </h6>{' '}
          </div>
         
          <div className="py-2 flex gap-3">
            <button className="rounded-[35px] cap text-white uppercase flex items-center gap-2 bg-[#229ed2] text-[13px] font-semibold px-[20px] py-[5px] min-h-[42px]">
              <img src="/assets/wallet.png" className="h-[15px] w-[13px]" alt="" />
              wallet
            </button>
            <button className="rounded-[35px] text-white uppercase flex items-center gap-2 bg-[#212121] text-[13px] font-semibold px-[20px] py-[5px] min-h-[42px]">
              Phantom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
