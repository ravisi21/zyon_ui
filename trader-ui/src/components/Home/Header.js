import {
    CloseOutlined,
    DownOutlined,
    MenuOutlined,
    UpOutlined,
} from "@ant-design/icons";
import { Flex } from "antd";
import { useState } from "react";
import { FaHome, FaCubes, FaInfoCircle, FaEnvelope, FaSignInAlt, FaTrophy, FaChartLine, FaGamepad, FaRobot } from 'react-icons/fa';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const navLinks = [
        { label: "Home", id: "home", icon: <FaHome className="mr-2 text-green-500 text-xl" /> },
        {
            label: "Products",
            icon: <FaCubes className="mr-2 text-green-500 text-xl" />,
            subLinks: [
                { label: "Zyon Challenge", id: "zyon-challenge", icon: <FaTrophy className="mr-2 text-green-500 text-xl" /> },
                { label: "Zyon Pro Analytics", id: "zyon-pro-analytics", icon: <FaChartLine className="mr-2 text-green-500 text-xl" /> },
                { label: "Zyon Virtual Trading", id: "zyon-virtual-trading", icon: <FaGamepad className="mr-2 text-green-500 text-xl" /> },
                { label: "Zyon Algo Hub", id: "zyon-algo-hub", icon: <FaRobot className="mr-2 text-green-500 text-xl" /> },
            ]
        },
        { label: "About Us", id: "about-us", icon: <FaInfoCircle className="mr-2 text-green-500 text-xl" /> },
        { label: "Contact Us", id: "contact-us", icon: <FaEnvelope className="mr-2 text-green-500 text-xl" /> },
        { label: "Trader Portal", url: "/trader", icon: <FaSignInAlt className="mr-2 text-green-500 text-xl" /> },
    ];

    return (
        <div className="sticky top-0 z-50 bg-[linear-gradient(rgb(0,0,0)_70%,rgba(30,41,59,1)_100%)]">
            <div className="h-20 w-full flex items-center justify-between px-6 lg:px-4 text-white relative">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <img src={`${process.env.PUBLIC_URL}/logo_icon.svg`} alt="Logo" className="w-12 h-12 md:h-16 md:w-16" />
                    </div>
                    <div><span className="font-bold text-white text-xl">ZYON</span><span className="pl-[2px] font-semibold text-green-500 text-xl">TRADER</span></div>
                </div>
                <div className="flex items-center justify-between">
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <div key={index} className="relative group">
                                {link.subLinks ? (
                                    <div className="relative">
                                        <button className="flex items-center text-white hover:text-green-400 transition-colors duration-200 font-medium">
                                            {link.icon}
                                            {link.label}
                                            <svg className="ml-1 w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        </button>
                                        <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                            <div className="py-2">
                                                {link.subLinks.map((subLink, subIndex) => (
                                                    <button
                                                        key={subIndex}
                                                        onClick={() => scrollToSection(subLink.id)}
                                                        className="flex items-center w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-150 text-left"
                                                    >
                                                        {subLink.icon}
                                                        {subLink.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => link.id ? scrollToSection(link.id) : window.open(link.url, '_blank')}
                                        className="flex items-center text-white hover:text-green-400 transition-colors duration-200 font-medium"
                                    >
                                        {link.icon}
                                        {link.label}
                                    </button>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex-1"></div>
                    <div className="flex items-center">
                        <button className="bg-green-600 hover:bg-green-700 active:bg-green-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 flex items-center">
                            <FaSignInAlt className="mr-2" />
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
