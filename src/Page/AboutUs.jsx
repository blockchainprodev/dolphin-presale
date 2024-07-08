import React from 'react';

export const AboutUs = () => {
  return (
    <div className="py-[40px]">
      <div className="container mx-auto px-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          <div className="md:max-w-[550px] max-w-full w-full mx-auto">
            <img src="/assets/video.webp" className="max-w-full w-full h-auto" alt="" />
          </div>
          <div>
            <h4 className="text-[38px] trebuchet text-[#242424] font-semibold">About Us</h4>
            <div className="   text-[19px] roboto" style={{ color: 'rgb(119, 119, 119)' }}>
              <p className="mb-2">
                At Dolphin, we’re inspired by the spirit of the dolphin, a lovely and friendly animal that embodies the
                values of friendship, kindness, and community. Dolphins are not just meme tokens – they’re symbols of
                love and connection, beloved by children and admired by all who encounter them.
              </p>
              <p className="mb-2">
                Dolphins are known for their gentle nature and their ability to make friends with other sea animals.
                With their playful personality and charming appearance, they bring joy and laughter wherever they go.
                Resembling the iconic character Babe, dolphins capture the hearts of people of all ages with their
                endearing qualities.
              </p>
              <p className="mb-2">
                As a team, we’re dedicated to channeling the spirit of dolphins into the Dolphin meme token project.
                Just like dolphins, we strive to create a welcoming and inclusive community where everyone feels valued
                and supported. Together, we’re building a platform that celebrates friendship, creativity, and
                positivity in the world of decentralized finance.
              </p>
              <p className="mb-2">
                Join us on this adventure as we embrace the magic of dolphins and spread love and happiness throughout
                the crypto community and beyond!
              </p>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
