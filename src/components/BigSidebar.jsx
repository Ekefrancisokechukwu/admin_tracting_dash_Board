import { styled } from "styled-components";
import Logo from "./Logo";
import DashboardLinks from "./DashboardLinks";
import { MdOutlineCancel } from "react-icons/md";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
import { useGlobalContext } from "../context/globalContext";
import { motion } from "framer-motion";

const BigSidebar = () => {
  const { isSidebarOpen, darkTheme } = useSelector((store) => store.user);
  const disPatch = useDispatch();
  const { isDarkMode, deskScreen } = useGlobalContext();

  const sidebar_animate = deskScreen
    ? {
        close: {
          margin: 0,

          transition: {
            damping: 10,
            duration: 0.3,
          },
        },
        open: {
          marginLeft: -276,
        },
      }
    : {
        open: {
          margin: 0,

          transition: {
            damping: 10,
            duration: 0.3,
          },
        },
        close: {
          marginLeft: -276,
        },
      };

  return (
    <Wrapper
      as={motion.aside}
      variants={sidebar_animate}
      animate={isSidebarOpen ? "close" : "open"}
    >
      <div className="wrapper">
        <MdOutlineCancel
          className="cancel"
          onClick={() => disPatch(toggleSidebar())}
        />
        <div className="content">
          <header className="sidebar-head">
            {isDarkMode ? (
              <img
                src="https://demos.creative-tim.com/soft-ui-dashboard-pro-tailwind/assets/img/logo-ct.png"
                alt="logo"
                className="logo"
              />
            ) : (
              <img
                src="https://demos.creative-tim.com/soft-ui-dashboard-pro-tailwind/assets/img/logo-ct-dark.png"
                alt="logo"
                className="logo"
              />
            )}

            <Logo />
          </header>
          <DashboardLinks />
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: sticky;
  padding: 0 2rem;
  transition: var(--transition);
  height: 95vh;
  top: 2rem;
  overflow-y: scroll;
  border-radius: var(--rounded-lx);
  background: var(--sidebar);
  width: 25rem;

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

  @media (max-width: 992px) {
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    background: var(--white);
    z-index: 20;
    box-shadow: var(--shadow-lg);
  }

  .cancel {
    display: none;

    @media (max-width: 992px) {
      display: block;
      font-size: 2rem;
      position: absolute;
      right: 1rem;
      top: 0.6rem;
    }
  }

  .logo {
    width: 3rem;
    height: 3rem;
  }

  .sidebar-head {
    display: flex;
    gap: 1rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--gray-50);
  }

  .content {
    transition: var(--transition);
  }

  .content.active {
    transition: var(--transition);
    width: 5rem;
  }
`;

export default BigSidebar;
