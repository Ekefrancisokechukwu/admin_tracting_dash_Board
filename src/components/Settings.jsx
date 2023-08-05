import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { styled } from "styled-components";
import ToggleSwitch from "./ToggleSwitch";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSetting,
  openSetting,
  toggleDarkTheme,
} from "../features/user/userSlice";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/globalContext";
import { colorsThemes } from "../utils/data";

const Settings = () => {
  const { isSettingOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const {
    toggleDarkTheme,
    isDarkMode,
    navBarFixed,
    handleNavbar,
    theme,
    setTheme,
  } = useGlobalContext();

  const handleChange = (e) => {
    toggleDarkTheme();
    let name = e.target.name;
    let check = e.target.checked;

    return { [name]: check };
  };

  return (
    <Wrapper>
      <div className={isSettingOpen ? "content visible" : "content"}>
        <div className="header">
          <div className="">
            <h1>Soft UI Configurator</h1>
            <h2>See our dashboard options.</h2>
          </div>

          <MdOutlineCancel
            className="cancel"
            onClick={() => dispatch(closeSetting())}
          />
        </div>

        <div className="sidebar-setting">
          <h3 className="sub-head">Sidebar Colors</h3>

          <div className="color-box">
            {colorsThemes.map((color, index) => {
              return (
                <span
                  key={index}
                  onClick={() => setTheme(color)}
                  style={{
                    background: color,
                  }}
                  className={
                    theme === color ? "sidebar-color active" : "sidebar-color"
                  }
                ></span>
              );
            })}
          </div>

          <div className="navbar">
            <h3 className="sub-head">navbar fixed</h3>
            <ToggleSwitch
              name="navbar"
              check={navBarFixed}
              handleChange={handleNavbar}
            />
          </div>

          <div className="navbar">
            <h3 className="sub-head">light/dark</h3>
            <ToggleSwitch
              name="darkTheme"
              check={isDarkMode}
              handleChange={handleChange}
            />
          </div>
        </div>

        <footer className="footer">
          <button className="footer-btn buy">Buy Now!</button>
          <button className="footer-btn demo">Free Demo</button>
        </footer>
      </div>

      <div className="toggleSetting" onClick={() => dispatch(openSetting())}>
        <IoSettingsSharp />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .content {
    width: 32rem;
    height: 100vh;
    background: var(--white);
    position: fixed;
    z-index: 5;
    top: 0;
    right: 0;
    box-shadow: 0px 5px 12px #00000078;
    padding: 3rem 3rem;
    transform: translate(100%);
    transition: var(--transition);
    overflow-y: scroll;

    &::-webkit-scrollbar-thumb {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background: #ccc;
      transition: var(--transition);
    }

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      border-top-right-radius: 10px;
    }

    @media (max-width: 330px) {
      width: 100%;
    }
  }

  .content.visible {
    transform: translate(0);
  }

  .cancel {
    cursor: pointer;
    font-size: 2.3rem;

    &:hover {
      transform: scale(1.06);
    }
  }

  .header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: var(--gray-200);
      font-size: 1.6rem;
    }

    h2 {
      font-weight: 300;
    }
  }

  .header-fixed {
  }

  .color-box {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .sidebar-color {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: var(--rounded-full);
    display: block;
    background: #00000071;
    cursor: pointer;
    border-radius: var(--rounded-full);

    &:hover {
      transform: scale(1.05);
      outline: 1px solid #701a75;
    }
  }

  .c_1 {
    /* display: block; */
    background: linear-gradient(130deg, #ec4899, #9d174d) !important;
  }

  .c_2 {
    /* display: block; */
    background: linear-gradient(130deg, #a3e635, #3f6212) !important;
  }

  .c_3 {
    /* display: block; */
    background: linear-gradient(130deg, #030b17, #1e293b) !important;
  }

  .c_4 {
    /* display: block; */
    background: linear-gradient(130deg, #fb923c, #c2410c) !important;
  }

  .c_5 {
    /* display: block; */
    background: linear-gradient(130deg, #60a5fa, #3730a3) !important;
  }

  .sidebar-color.active {
    outline: 2px solid #701a75;
  }

  .sidebar-setting {
    margin-top: 5rem;
  }

  .navbar {
    border-bottom: 1px solid #cccccc84;
    padding: 3rem 0;
  }

  .sub-head {
    color: var(--gray-200);
    font-size: 1.4rem;
    text-transform: capitalize;
    margin: 1rem 0;
  }

  .toggleSetting {
    position: fixed;
    width: 4.3rem;
    height: 4.3rem;
    background: #fff;
    border-radius: var(--rounded-full);
    box-shadow: 0 4px 8px #00000055;
    cursor: pointer;
    right: 1.7rem;
    bottom: 1.6rem;
    display: grid;
    place-items: center;
    z-index: 2;

    svg {
      font-size: 2rem;
      color: #04294ad2;
    }
    @media (max-width: 480px) {
      width: 3rem;
      height: 3rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 8rem;
  }

  .footer-btn {
    font-size: 1.3rem;
    font-weight: 600;
    padding: 1rem;
    color: #ffff;
    border-radius: var(--rounded-lg);

    &:hover {
      transform: scale(1.02);
    }
  }

  .buy {
    background: linear-gradient(153deg, #67e8f9, #1e40af);
  }

  .demo {
    background: linear-gradient(153deg, #64748b, #1e293b);
  }
`;
export default Settings;
