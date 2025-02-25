import React, { useState, useEffect } from 'react';
import Logo from "../assets/Group.png";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Features', href: '#features' },
        { label: 'Customers', href: '#customers' },
        { label: 'Updates', href: '#updates' },
        { label: 'Help', href: '#help' },
    ];
    
    return (
        <nav className="w-full bg-white px-8 py-4 flex flex-row justify-between items-center">
            {/* Logo */}
            <div className="flex flex-row items-center gap-2">
                <img src={Logo} alt="Logo" className="w-12 h-12" />
                <span className="text-2xl font-inter hidden sm:block">joyful</span>
            </div>

            <div className="hidden sm:flex flex-row items-center justify-between gap-4">
                {navItems.map((item)=>(
                    <a key={item.label} href={item.href} className="text-gray-500 hover:text-black transition-colors text-sm">{item.label}</a>
                ))}
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold"> Book a call </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="sm:hidden" onClick={() => setMobileMenuOpen(true)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden">
                    <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMobileMenuOpen(false)} />
                    <div className="fixed inset-y-0 right-0 w-64 bg-white p-6 z-50 shadow-lg">
                        <div className="flex justify-end">
                            <button onClick={() => setMobileMenuOpen(false)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                        </div>

                        <div className="mt-8 flex flex-col gap-4">
                            {navItems.map((item) => (
                            <a key={item.label} href={item.href} className="text-gray-600 hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)} >
                                {item.label}
                            </a>
                            ))}

                            <button className="bg-black text-white px-4 py-2 rounded-lg mt-2"> Book a call </button>
                        </div>
                    </div>
                </div>
                )}
        </nav>
  )
}

export default Navbar;