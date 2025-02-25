import React from 'react';
import { Link } from 'react-router-dom';

import Logo from "../assets/Group.png";

import XLogo from "../assets/footer/x.svg";
import InstaLogo from "../assets/footer/instagram.svg";
import PintrestLogo from "../assets/footer/pintrest.svg";
import LinkedinLogo from "../assets/footer/linkedin.svg";
import TiktokLogo from "../assets/footer/tiktok.svg";
import YoutubeLogo from "../assets/footer/youtube.svg";

const Footer = () => {
  const footerLinks = {
    product: ['Features', 'Integrations', 'Updates', 'FAQ', 'Pricing'],
    company: ['About', 'Blog', 'Careers', 'Manifesto', 'Press', 'Contact'],
    resources: ['Examples', 'Community', 'Guides', 'Docs'],
    legal: ['Privacy', 'Terms', 'Security']
  };

  return (
    <footer className="flex justify-between w-full bg-gray-800 text-white px-4 py-6" style={{backgroundColor: "rgba(11, 11, 11, 11)"}}>
      {/* Left section */}
      <div className="flex flex-col justify-between w-1/6 gap-24">
        <div className="flex flex-col gap-2">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <img src=''></img>
          <p className="text-left font-inter text-sm text-neutral-400 ">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.</p>
        </div>
        <div className="flex flex-row gap-3.5">
          <img src={XLogo} alt="X" className="w-4 h-4" />
          <img src={InstaLogo} alt="Instagram" className="w-4 h-4" />
          <img src={PintrestLogo} alt="Pinterest" className="w-4 h-4" />
          <img src={LinkedinLogo} alt="LinkedIn" className="w-4 h-4" />
          <img src={TiktokLogo} alt="TikTok" className="w-4 h-4" />
          <img src={YoutubeLogo} alt="YouTube" className="w-4 h-4" />
        </div>
      </div>

      {/* Right section */}
      <div className="grid grid-cols-4 text-sm gap-10">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className='flex flex-col gap-3'>
                <h3 className="font-semibold capitalize" >{category}</h3>
                <ul className='flex flex-col gap-3'>
                  {links.map((link) => (
                    <li key={link}>
                      <Link to="#" className="text-neutral-400 hover:text-white transition"> {/* Use to prop instead of href */}
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
    </footer>
  );
};

export default Footer;