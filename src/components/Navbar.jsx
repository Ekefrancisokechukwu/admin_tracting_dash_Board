import { TbHome2 } from "react-icons/tb";
import { BiMenuAltRight } from "react-icons/bi";
import { FaUser, FaCaretDown } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  clearStore,
  closeSetting,
  logoutUser,
  openSetting,
  toggleSidebar,
} from "../features/user/userSlice";
import { useGlobalContext } from "../context/globalContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, isSidebarOpen } = useSelector((store) => store.user);
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();
  const { navBarFixed } = useGlobalContext();

  return (
    <Wrapper className={navBarFixed ? "navbar-fixed" : ""}>
      <nav className="nav">
        <div className="nav-left">
          <div>
            <div className="page-info">
              <Link to="/">
                <TbHome2 />
              </Link>{" "}
              /<span>pages</span> / <span>Default</span>
            </div>
            <h1 className="dash-page">Default</h1>
          </div>

          {isSidebarOpen ? (
            <RxHamburgerMenu
              className="toggle-sidebar"
              onClick={() => dispatch(toggleSidebar())}
            />
          ) : (
            <BiMenuAltRight
              className="toggle-sidebar"
              onClick={() => dispatch(toggleSidebar())}
            />
          )}
        </div>

        <ul className="nav-right">
          <li className="sign-in" onClick={() => setShowLogout(!showLogout)}>
            <FaUser /> <span>{user?.name}</span> <FaCaretDown />
            {showLogout && (
              <button
                className="logout-btn"
                onClick={() => dispatch(clearStore())}
              >
                Logout
              </button>
            )}
          </li>

          <li onClick={() => dispatch(openSetting())}>
            <IoSettingsSharp />
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .nav {
    padding: 1.5rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 391px) {
      flex-wrap: wrap;
      gap: 2rem;
      padding: 1.5rem 2rem;
    }
  }

  .nav-left {
    display: flex;
    gap: 3rem;
    align-items: center;
    @media (max-width: 391px) {
      justify-content: space-between;
      width: 100%;
    }
  }

  .page-info {
    display: flex;
    font-size: 1.2rem;
    gap: 4px;
  }

  .toggle-sidebar {
    font-size: 2.2rem;
    cursor: pointer;
  }

  .dash-page {
    color: var(--gray-200);
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .nav-right {
    display: flex;
    gap: 3rem;
    /* color: var(--gray-100); */

    li {
      cursor: pointer;
    }

    .sign-in {
      display: flex;
      gap: 6px;
      align-items: center;
      text-transform: capitalize;
      position: relative;

      span {
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
    .logout-btn {
      position: absolute;
      top: 3rem;
      left: 50%;
      transform: translateX(-50%);
      background-color: #e6e3e3;
      padding: 8px 1.3rem;
      font-size: 1.5rem;
      box-shadow: var(--shadow-lg);
      border-radius: var(--rounded);
      color: var(--gray-100);
    }
  }
`;
export default Navbar;
