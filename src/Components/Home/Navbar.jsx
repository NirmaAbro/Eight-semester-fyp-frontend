import React, { useState } from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaInfoCircle, FaClipboardList, FaComments } from "react-icons/fa";
import {  ProfileOutlined, FileOutlined, DownOutlined, LogoutOutlined } from "@ant-design/icons";
import useAuth from "../../hooks/useAuth";
import { Dropdown, Menu, Button } from "antd";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()
  console.log("user", user)
  console.log("isAuthenticated", isAuthenticated)

  const handleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile" icon={<ProfileOutlined />}>
        <NavLink to="/profile">Profile</NavLink>
      </Menu.Item>
      <Menu.Item key="dietPlans" icon={<FileOutlined />}>
        <NavLink to="/my-diet-plans">My Diet Plans</NavLink>
      </Menu.Item>
      {/* <Menu.Item key="settings" icon={<SettingOutlined />}>
        <NavLink to="/settings">Settings</NavLink>
      </Menu.Item> */}
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        <span onClick={() => logout()}>Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <nav className="relative top-0 w-full bg-gradient-to-r from-primary to-primary-dark
 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center ">
            <div className="flex-shrink-0 flex items-center  cursor-pointer" onClick={(() => navigate("/"))}>
              <IoFastFoodSharp className="text-3xl text-white" />
              <span className="ml-2 text-white text-2xl font-bold">SmartPlate</span>
            </div>

            <div className="hidden lg:flex space-x-8 items-center">
              {[
                { path: "/", label: "Home", Icon: FaHome },
                { path: "/aboutus", label: "About Us", Icon: FaInfoCircle },
                { path: "/getstarted", label: "Generate Diet Plan", Icon: FaClipboardList },
                { path: "/feedback", label: "Feedback", Icon: FaComments },
              ].map(({ path, label, Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-primary-dark transition duration-300 ${isActive ? "bg-primary-dark" : ""
                    }`
                  }
                >
                  <Icon className="mr-1" /> {label}
                </NavLink>
              ))}
            </div>
            {
              isAuthenticated ? <div className="hidden lg:flex items-center space-x-4 ">
                <Dropdown overlay={menu} trigger={['click']} className="w-full">
                  <Button className="bg-white text-green-700 hover:bg-gray-100">
                    {user?.username || "User"} <DownOutlined />
                  </Button>
                </Dropdown>
              </div> : <div className="hidden lg:flex items-center space-x-4">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `px-4 py-2 border border-white rounded-md text-lg font-medium text-white hover:bg-primary hover:text-white transition duration-300 ${isActive ? "bg-primary " : ""
                    }`
                  }
                >
                  Log In
                </NavLink>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `px-4 py-2 border border-transparent rounded-md text-lg font-medium text-blue-900 bg-white hover:bg-gray-100 transition duration-300 ${isActive ? "bg-gray-100 text-green-700" : ""
                    }`
                  }
                >
                  Sign Up
                </NavLink>
              </div>
            }


            <div className="flex items-center lg:hidden">
              <button
                onClick={handleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isNavOpen}
                className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
              >
                {isNavOpen ? (
                  <IoMdCloseCircle className="h-8 w-8" />
                ) : (
                  <TiThMenu className="h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isNavOpen && (
          <div className="lg:hidden animate-slide-in bg-blue-900 text-white ">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { path: "/", label: "Home", Icon: FaHome },
                { path: "/aboutus", label: "About Us", Icon: FaInfoCircle },
                { path: "/getstarted", label: "Get Started", Icon: FaClipboardList },
                { path: "/feedback", label: "Feedback", Icon: FaComments },
              ].map(({ path, label, Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900 transition duration-300 ${isActive ? "bg-blue-900 text-white" : ""
                    }`
                  }
                  onClick={() => setIsNavOpen(false)}
                >
                  <Icon className="mr-1" /> {label}
                </NavLink>
              ))}
              <div className="mt-3 space-y-1">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `block text-blue-900 bg-white hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium  transition duration-300 ${isActive ? "bg-white text-blue-900" : ""
                    }`
                  }
                  onClick={() => setIsNavOpen(false)}
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `block text-blue-900 bg-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition duration-300 ${isActive ? "bg-gray-100 text-blue-900" : ""
                    }`
                  }
                  onClick={() => setIsNavOpen(false)}
                >
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
