import {
  FaHome,
  FaCubes,
  FaInfoCircle,
  FaEnvelope,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  setShowHomeUserLogin,
  setSignInFollowUp,
  userStore,
} from "../../store/userStore";
import { Avatar, Dropdown, Menu } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import eventBus, { EVENT_TYPES } from "../../utils/eventBus";
import { signout, syncLite } from "../../api/apis";
import { showErrorToast } from "../../utils/utils";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(() => userStore.user);

  useEffect(() => {
    function handleUserChange() {
      setUser(userStore.user);
    }

    const unsubscribeUser = eventBus.on(
      EVENT_TYPES.USER_UPDATE,
      handleUserChange,
    );
    setUser(userStore.user);

    return () => {
      if (typeof unsubscribeUser === "function") unsubscribeUser();
    };
  }, []);

  const isSignedIn = user && user?.userId;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const handleTraderPortalClick = () => {
    if (isSignedIn) {
      // User is signed in, directly open trader portal in same window
      window.location.href = "/trader";
    } else {
      // User is not signed in, show signin popup and set follow-up action
      setShowHomeUserLogin(true);
      setSignInFollowUp("trader");
    }
  };

  const handleMenuClick = async ({ key }) => {
    switch (key) {
      case "logout":
        try {
          await signout();
          await syncLite();
        } catch (error) {
          showErrorToast("Could not sign out");
        }
        break;
      default:
        break;
    }
  };

  const menu = isSignedIn && (
    <Menu onClick={handleMenuClick}>
      <Menu.Item
        key="welcome"
        disabled
        style={{
          cursor: "default",
          fontWeight: "bold",
          color: "#555",
          background: "#f6f6f6",
        }}
      >
        Hi, {user.name || user.userName || "User"}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />} danger>
        Sign Out
      </Menu.Item>
    </Menu>
  );

  const navLinks = [
    {
      label: "Home",
      id: "home",
      icon: <FaHome className="mr-2 text-neutral-50 text-xl" />,
    },
    {
      label: "Products",
      icon: <FaCubes className="mr-2 text-neutral-50 text-xl" />,
      subLinks: [
        { label: "Zyon Challenge", id: "feature-Trading-Competition" },
        { label: "Zyon Pro Analytics", id: "feature-Market-Dashboard" },
        { label: "Zyon Virtual Trading", id: "feature-Paper-Trading" },
        { label: "Zyon Algo Hub", id: "feature-Forward-Testing" },
      ],
    },
    {
      label: "About Us",
      id: "about-us",
      icon: <FaInfoCircle className="mr-2 text-neutral-50 text-xl" />,
    },
    {
      label: "Contact Us",
      id: "contact-us",
      icon: <FaEnvelope className="mr-2 text-neutral-50 text-xl" />,
    },
    {
      label: "Trader Portal",
      url: "/trader",
      icon: <FaSignInAlt className="mr-2 text-neutral-50 text-xl" />,
      isTraderPortal: true,
    },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[linear-gradient(rgba(0,0,0)_0%,rgba(30,41,59,1)_70%)]">
        <div className="h-20 w-full flex items-center justify-between px-6 lg:px-4 text-white relative">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                src={`${process.env.PUBLIC_URL}/logo_icon.svg`}
                alt="Logo"
                className="w-12 h-12 md:h-16 md:w-16"
              />
            </div>
            <div>
              <span className="font-bold text-white text-xl">ZYON</span>
              <span className="pl-[2px] font-semibold text-green-500 text-xl">
                TRADER
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between">
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group">
                  {link.subLinks ? (
                    <div className="relative">
                      <button className="flex items-center text-white hover:text-green-400 transition-colors duration-200 font-medium">
                        {link.icon}
                        {link.label}
                        <svg
                          className="ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M19 9l-7 7-7-7"
                          />
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
                      onClick={() => {
                        if (link.isTraderPortal) {
                          handleTraderPortalClick();
                        } else if (link.id) {
                          scrollToSection(link.id);
                        } else {
                          window.location.href = link.url;
                        }
                      }}
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
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-white transition-colors duration-200 p-2"
              >
                <FaBars className="text-xl" />
              </button>

              {/* Desktop Sign In Button or Avatar */}
              {isSignedIn ? (
                <Dropdown
                  overlay={menu}
                  placement="bottomRight"
                  trigger={["click"]}
                  className="hidden md:block"
                >
                  <Avatar
                    style={{
                      backgroundColor: "#3b82f6",
                      cursor: "pointer",
                      border: "1px solid #3b82f6",
                    }}
                    icon={<UserOutlined />}
                    src={
                      user.avatarBlobId
                        ? `https://zyontrader.com/api/img/${user.avatarBlobId}`
                        : undefined
                    }
                    shape="square"
                    size={36}
                  />
                </Dropdown>
              ) : (
                <button
                  onClick={() => setShowHomeUserLogin(true)}
                  className="hidden md:flex bg-blue-600 hover:bg-blue-700 active:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 items-center"
                >
                  <FaSignInAlt className="mr-2" />
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Drawer */}
          <div className="absolute left-0 top-0 h-full w-80 bg-slate-800 shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <div className="flex items-center">
                <img
                  src={`${process.env.PUBLIC_URL}/logo_icon.svg`}
                  alt="Logo"
                  className="w-8 h-8"
                />
                <div className="ml-3">
                  <span className="font-bold text-white text-lg">ZYON</span>
                  <span className="pl-1 font-semibold text-green-500 text-lg">
                    TRADER
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-400 hover:text-white transition-colors duration-200 p-2"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            <nav className="p-6">
              {navLinks.map((link, index) => (
                <div key={index} className="mb-4">
                  {link.subLinks ? (
                    <div>
                      <div className="flex items-center text-white font-medium mb-2">
                        {link.icon}
                        {link.label}
                      </div>
                      <div className="ml-6 space-y-2">
                        {link.subLinks.map((subLink, subIndex) => (
                          <button
                            key={subIndex}
                            onClick={() => scrollToSection(subLink.id)}
                            className="flex items-center w-full px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors duration-150 text-left"
                          >
                            {subLink.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        if (link.isTraderPortal) {
                          handleTraderPortalClick();
                          setIsMobileMenuOpen(false);
                        } else if (link.id) {
                          scrollToSection(link.id);
                        } else {
                          window.location.href = link.url;
                        }
                      }}
                      className="flex items-center w-full px-3 py-3 text-white hover:bg-slate-700 rounded transition-colors duration-150"
                    >
                      {link.icon}
                      {link.label}
                    </button>
                  )}
                </div>
              ))}

              {/* Mobile User Section */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                {isSignedIn ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Avatar
                        size={32}
                        className="bg-blue-600"
                        icon={<UserOutlined />}
                        src={
                          user?.avatarBlobId
                            ? `https://zyontrader.com/api/img/${user?.avatarBlobId}`
                            : undefined
                        }
                        shape="square"
                        style={{ border: "3px solid #3b82f6" }}
                      />
                      <div>
                        <div className="text-white font-semibold">
                          Hi, {user?.name || user?.userName || "User"}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <button
                        className="flex items-center w-full px-3 py-2 text-red-400 hover:text-red-300 hover:bg-slate-700 rounded transition-colors duration-150"
                        onClick={async () => {
                          try {
                            await signout();
                            await syncLite();
                            setIsMobileMenuOpen(false);
                          } catch (error) {
                            showErrorToast("Could not sign out");
                          }
                        }}
                      >
                        <FaSignOutAlt className="mr-2" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowHomeUserLogin(true)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <FaSignInAlt className="mr-2" />
                    Sign In
                  </button>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
