import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ArrowIcon from '../assets/signin/arrow.svg';
 
const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const footerLinks = {
    product: ['Features', 'Integrations', 'Updates', 'FAQ', 'Pricing'],
    company: ['About', 'Blog', 'Careers', 'Manifesto', 'Press', 'Contact'],
    resources: ['Examples', 'Community', 'Guides', 'Docs'],
    legal: ['Privacy', 'Terms', 'Security']
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create URLSearchParams object for form data
    const formDataToSend = new URLSearchParams();
    formDataToSend.append('username', formData.username);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('login-form-submit', 'login');
 
    try {
      const response = await fetch('https://staging.trooya.com/app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend,
        redirect: 'follow', // This ensures fetch follows redirects
        credentials: 'include' // This ensures cookies are sent with the request
      });
 
      // If the response was redirected, the browser will have followed it automatically
      // The response.url will be the final URL after all redirects
      if (response.ok) {
        window.location.href = response.url;
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
 
  return (
    <div className="min-h-screen flex flex-col">
      {/* Updates section */}
      <div className="w-full bg-indigo-900 text-white flex flex-col sm:flex-row justify-center items-center py-2 sm:py-3 gap-2 sm:gap-4 text-xs sm:text-sm">
        <span>Watch out latest Product Updates Webinar</span>
        <div className='flex flex-row font-semibold items-center gap-2'>
          <span>Joyful CX Feb 2025</span>
          <img src={ArrowIcon} alt="arrow" className="w-4 h-4" />
        </div>
      </div>
      
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-8 sm:py-10 md:py-14" style={{backgroundColor: 'rgba(247, 244, 236, 1)'}}>
        <div className="bg-white border-[0.5px] border-black rounded px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-start gap-4">
          <div className="flex flex-col gap-3 sm:gap-4 text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Welcome 👋</h1>
            <h3 className="text-sm md:text-base font-light">Enter your details below</h3>  
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 mt-2 sm:mt-4">
            <div className="flex flex-col gap-1 sm:gap-2 items-start">
              <label htmlFor="email" className="text-lg sm:text-xl font-normal" style={{color:"rgba(1, 13, 62, 1)"}}>Email</label>
              <input type="email" id="email" name="username" value={formData.username} onChange={handleChange} placeholder="name@company.com" className="w-full px-3 py-1.5 sm:px-4 sm:py-2 border border-black rounded-lg text-sm sm:text-base"/>
            </div>
            <div className="flex flex-col gap-1 sm:gap-2 items-start">
              <label htmlFor="password" className="text-lg sm:text-xl font-normal" style={{color:"rgba(1, 13, 62, 1)"}}>Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" className="w-full px-3 py-1.5 sm:px-4 sm:py-2 border border-black rounded-lg text-sm sm:text-base"/>
            </div>
            <a className="self-end text-xs" style={{color:"rgba(44, 31, 99, 1)"}}>Forgot your password?</a>
            <button type="submit" className="w-full mt-2 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2" style={{backgroundColor:'rgba(254, 92, 102, 1)'}}>
              <span className='font-semibold text-sm'>Sign in</span>
              <img src={ArrowIcon} alt="arrow" className="w-4 h-4" />
            </button>

            <div className="relative my-3 sm:my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <button 
              type="button"
              className="self-center px-4 py-2 border-[0.5px] border-black rounded-lg flex items-center justify-center w-full sm:w-auto"
            >
              Sign in with SSO
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;