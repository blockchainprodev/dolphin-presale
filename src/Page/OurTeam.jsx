import React, { useState } from 'react';

const team = [
  {
    id: 1,
    profession: 'IT Specialist - James',
    img: '/assets/IMG_7935-qoruub7l2bc9xv4qytsxei6zqixp7ud4a423a915ls.webp',
    desc: 'Our IT Specialist ensures that all our technological operations run smoothly and efficiently. With a keen eye for detail and a deep understanding of complex systems, they are the backbone of our digital infrastructure, ensuring robust security and seamless functionality.',
  },
  {
    id: 2,
    profession: 'CPA (Certified Public Accountant) - Ali',
    img: '/assets/IMG_7934-qoruu5kjxb4k07cxvrd5zjm867phxnqq9c56el9in4.webp',
    desc: 'Our CPA meticulously manages our financial operations, ensuring compliance and accuracy in all our financial transactions. Their expertise in accounting and finance ensures that our financial health is always in check, fostering trust and transparency within our community.',
  },
  {
    id: 3,
    profession: 'Digital Marketing Specialist - Daniel',
    img: '/assets/IMG_7933-qorutyzolgvjqxmhy6is03a00ilxfs0lwfks1nj9uo.webp',
    desc: 'The Digital Marketing Specialist crafts and executes effective marketing strategies to enhance our online presence and engage with our audience. Their innovative approach and deep understanding of digital trends help us connect with the right audience and drive our growth.',
  },
  {
    id: 4,
    profession: 'MBA (Master of Business Administration) - Hassan',
    img: '/assets/IMG_7932-qorutrgz2sl961xf639rg56b9fmzq76r7ecw7fuf8g.webp',
    desc: 'Our IT Specialist ensures that all our technological operations run smoothly and efficiently. With a keen eye for detail and a deep understanding of complex systems, they are the backbone of our digital infrastructure, ensuring robust security and seamless functionality.',
  },
  {
    id: 5,
    profession: 'Crypto Advisor - Terry',
    img: '/assets/IMG_7931-qorutjy9k4ayl68ce00qw72mico20mcwid50d85km8.webp',
    desc: 'Our Crypto Advisor provides invaluable insights into the cryptocurrency landscape, helping us navigate the complexities of the blockchain world. Their expertise in crypto economics and market trends ensures that Dolphin remains a leader in the token economy.',
  },
];

export const OurTeam = () => {
  const [expandedTeams, setExpandedTeams] = useState(Array(team.length).fill(false));

  const handleToggle = (index) => {
    const newExpandedTeams = [...expandedTeams];
    newExpandedTeams[index] = !newExpandedTeams[index];
    setExpandedTeams(newExpandedTeams);
  };
  return (
    <div className="py-[40px] overflow-hidden">
      <div className="container mx-auto max-w-full w-full lg:max-w-[1140px]  px-[20px]">
        <div className="grid grid-cols-12 items-center gap-7">
          <div className="col-span-12 md:col-span-4">
            <div className="liner-continer">
              <h4 className="text-[34px] text-[#242424] font-semibold poppins"> Meet our team</h4>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div>
              <p className="roboto text-[18px]" style={{ color: 'rgb(122, 122, 122)' }}>
                At Dolphin, we are proud to introduce a diverse team of professionals dedicated to driving innovation
                and success in the blockchain and e-commerce spaces. Each team member brings unique expertise and a
                passion for excellence, ensuring that Dolphin remains at the forefront of industry advancements
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5  pt-5">
          {team.map((member, index) => (
            <div key={index} className="max-w-full md:max-w-[200px] mb-4">
              <div className="team-img mb-[15px]">
                <img src={member.img} className="md:max-w-[184px] max-w-full h-auto" alt={member.profession} />
              </div>
              <h4 className="member-name text-[#242424] poppins font-semibold text-[18px] mb-[20px]">
                {member.profession}
              </h4>
              <div
                className="relative flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h2 className="text-[#00238A] font-semibold text-[16px] roboto">Read More</h2>
                <img
                  src="/assets/down.png"
                  className={`w-[10px] h-[10px] transition-transform ${expandedTeams[index] ? 'rotate-180' : ''}`}
                  alt="arrow"
                />
              </div>
              <div className={`transition-content ${expandedTeams[index] ? 'expanded' : ''}`}>
                <p className="lato text-[14px] font-normal" style={{ color: 'rgb(119, 119, 119)' }}>
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
