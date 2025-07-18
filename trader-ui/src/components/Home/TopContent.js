import React from 'react';
import { FaRocket, FaChartLine, FaShieldAlt, FaUsers, FaTrophy, FaPlay, FaArrowRight, FaStar, FaYoutube, FaLightbulb, FaBrain, FaRobot } from 'react-icons/fa';

const TopContent = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="bg-gray-900 w-[90%]">
            <div className="relative flex-col w-full bg-gradient-to-br from-gray-900 via-gray-900 to-green-900/40 pb-[200px] overflow-hidden rounded-b-3xl">
                <div className="absolute top-0 bottom-0 left-0 right-0 inset-0 bg-cover bg-center bg-no-repeat opacity-15" style={{ backgroundImage: 'url(/trader/market.png)' }}></div>
                <div className="text-white pt-10 pl-10 flex">
                    <div className="flex-0 text-right">
                        <div className="text-4xl font-bold pb-6 animate-slideInFromLeft" style={{ animationDelay: '0.2s' }}>TRADE THE MARKETS,</div>
                        <div className="text-green-500 text-4xl font-bold pb-6 animate-slideInFromLeft" style={{ animationDelay: '0.4s' }}>NOT YOUR SAVINGS</div>
                    </div>
                    <div className="flex-1"></div>
                </div>
                <div className="p-4"></div>
                <div className="text-white pb-10 pr-10 flex">
                    <div className="flex-1"></div>
                    <div className="flex-0 text-right">
                        <div className="text-4xl font-bold pb-6 animate-slideInFromRight" style={{ animationDelay: '1.2s' }}>TRANSFORM YOUR TRADING,</div>
                        <div className="text-green-500 text-4xl font-bold pb-6 animate-slideInFromRight" style={{ animationDelay: '1.4s' }}><span className="text-white">SUCCEED WITH </span><span className="text-green-500 text-6xl">ZYON</span></div>
                    </div>
                </div>
            </div>
            {/* Features Section */}
            <div className="container mx-auto px-4 pt-8 bg-gray-50" style={{ opacity: '0.99' }}>
                <div className="mt-[-250px]">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Why <span className="text-green-500">ZYON?</span>
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Everything you need to succeed in the markets, all in one platform
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
                        <div className="text-center p-8 bg-gray-800 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl animate-jumpInFromBottom" style={{ animationDelay: '2.0s' }}>
                            <div className="flex items-center gap-4">
                                <div className="text-green-500 text-4xl flex">
                                    <FaTrophy />
                                </div>
                                <h3 className="text-xl font-bold text-green-500">ZYON CHALLENGE</h3>
                            </div>
                            <div className="text-gray-400 text-left">
                                <ul className="list-disc list-inside">
                                    <li className="pt-4">Simulated Trading Account</li>
                                    <li className="pt-2">Win 1000 ZYON Coins</li>
                                    <li className="pt-2">Access to <span className="text-green-500 font-bold">ZYON</span> Tools</li>
                                    <li className="pt-2 text-white">Chance to Get <span className="text-green-500 font-bold">FUNDED</span>*</li>
                                </ul>
                            </div>
                            <div className="flex pt-4">
                                <div className="flex items-center gap-4">
                                    <FaYoutube className="text-red-600 text-4xl hover:text-red-500 transition-colors duration-200 cursor-pointer" />
                                </div>
                                <div className="flex-1"></div>
                                <button 
                                    onClick={() => scrollToSection('zyon-challenge')}
                                    className="bg-transparent border-2 border-green-500 hover:border-green-400 active:border-green-500 text-green-500 hover:text-green-400 active:text-green-500 font-semibold py-2 px-6 rounded transition-colors duration-200 flex items-center"
                                >
                                    <FaLightbulb className="mr-2 text-sm" />
                                    KNOW MORE
                                </button>
                            </div>
                        </div>

                        <div className="text-center p-8 bg-gray-800 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl animate-jumpInFromBottom" style={{ animationDelay: '2.2s' }}>
                            <div className="flex items-center gap-4">
                                <div className="text-green-500 text-4xl flex">
                                    <FaChartLine />
                                </div>
                                <h3 className="text-xl font-bold text-white">Advanced Analytics</h3>
                            </div>
                            <div className="text-gray-400 text-left">
                                <ul className="list-disc list-inside">
                                    <li className="pt-4">Scanners And Custom Alerts</li>
                                    <li className="pt-2">Powerful Market Picture</li>
                                    <li className="pt-2">Complete Option Analysis</li>
                                    <li className="pt-2">AI - Powered Market Insights</li>
                                </ul>
                            </div>
                            <div className="flex pt-4">
                                <div className="flex items-center gap-4">
                                    <FaYoutube className="text-red-600 text-4xl hover:text-red-500 transition-colors duration-200 cursor-pointer" />
                                </div>
                                <div className="flex-1"></div>
                                <button 
                                    onClick={() => scrollToSection('zyon-pro-analytics')}
                                    className="bg-transparent border-2 border-green-500 hover:border-green-400 active:border-green-500 text-green-500 hover:text-green-400 active:text-green-500 font-semibold py-2 px-6 rounded transition-colors duration-200 flex items-center"
                                >
                                    <FaLightbulb className="mr-2 text-sm" />
                                    KNOW MORE
                                </button>
                            </div>
                        </div>

                        <div className="text-center p-8 bg-gray-800 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl animate-jumpInFromBottom" style={{ animationDelay: '2.4s' }}>
                            <div className="flex items-center gap-4">
                                <div className="text-green-500 text-4xl flex">
                                    <FaBrain />
                                </div>
                                <h3 className="text-xl font-bold text-white">Learn To Trade</h3>
                            </div>
                            <div className="text-gray-400 text-left">
                                <ul className="list-disc list-inside">
                                    <li className="pt-4">Simulated Trading Account</li>
                                    <li className="pt-2">Access to <span className="text-green-500 font-bold">ZYON</span> Analytics</li>
                                    <li className="pt-2">Trade Insights & Journaling</li>
                                    <li className="pt-2">Zero Risk - Only Learning</li>
                                </ul>
                            </div>
                            <div className="flex pt-4">
                                <div className="flex items-center gap-4">
                                    <FaYoutube className="text-red-600 text-4xl hover:text-red-500 transition-colors duration-200 cursor-pointer" />
                                </div>
                                <div className="flex-1"></div>
                                <button 
                                    onClick={() => scrollToSection('zyon-virtual-trading')}
                                    className="bg-transparent border-2 border-green-500 hover:border-green-400 active:border-green-500 text-green-500 hover:text-green-400 active:text-green-500 font-semibold py-2 px-6 rounded transition-colors duration-200 flex items-center"
                                >
                                    <FaLightbulb className="mr-2 text-sm" />
                                    KNOW MORE
                                </button>
                            </div>
                        </div>

                        <div className="text-center p-8 bg-gray-800 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl animate-jumpInFromBottom" style={{ animationDelay: '2.6s' }}>
                            <div className="flex items-center gap-4">
                                <div className="text-green-500 text-4xl flex">
                                    <FaRobot />
                                </div>
                                <h3 className="text-xl font-bold text-white">Algo Hub</h3>
                            </div>
                            <div className="text-gray-400 text-left">
                                <ul className="list-disc list-inside">
                                    <li className="pt-4">Forward Test - Simulated APIs</li>
                                    <li className="pt-2">Deploy Strategies to a Live Account</li>
                                    <li className="pt-2">All Top Brokers Supported</li>
                                    <li className="pt-2">Live Monitoring & Alerts</li>
                                </ul>
                            </div>
                            <div className="flex pt-4">
                                <div className="flex items-center gap-4">
                                    <FaYoutube className="text-red-600 text-4xl hover:text-red-500 transition-colors duration-200 cursor-pointer" />
                                </div>
                                <div className="flex-1"></div>
                                <button 
                                    onClick={() => scrollToSection('zyon-algo-hub')}
                                    className="bg-transparent border-2 border-green-500 hover:border-green-400 active:border-green-500 text-green-500 hover:text-green-400 active:text-green-500 font-semibold py-2 px-6 rounded transition-colors duration-200 flex items-center"
                                >
                                    <FaLightbulb className="mr-2 text-sm" />
                                    KNOW MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopContent;
