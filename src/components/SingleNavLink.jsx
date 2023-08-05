import { useAccord } from "../customHooks";
import { HiChevronDown } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import { toggleSidebar } from "../features/user/userSlice";
import { motion } from "framer-motion";
import SubmenuChild from "./SubmenuChild";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useGlobalContext } from "../context/globalContext";

const SingleNavLink = ({ icon, head, submenu, submenuChild, path }) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { deskScreen } = useGlobalContext();

  return (
    <>
      <article className="nav">
        <div
          className={`header ${pathname.includes(path) && "active"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="icon">{icon} </span>

          <h5 className="singlenavlinkhead">{head}</h5>
          <HiChevronDown
            className="arrowdown"
            style={isOpen ? { transform: "rotate(180deg)" } : ""}
          />
        </div>
        <motion.div
          animate={isOpen ? { height: "auto" } : { height: 0 }}
          transition={{
            duration: 0.2,
            ease: "linear",
          }}
          className="content"
        >
          <ul className="link-list">
            {submenu.map((menu, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={menu.path}
                    onClick={() =>
                      deskScreen ? dispatch(toggleSidebar()) : null
                    }
                    className={({ isActive }) =>
                      isActive ? "link active" : "link"
                    }
                  >
                    <span className="dot"></span> {menu.text}
                  </NavLink>
                </li>
              );
            })}

            {submenuChild &&
              submenuChild.map((item, index) => (
                <SubmenuChild key={index} {...item} />
              ))}
          </ul>
        </motion.div>
      </article>
    </>
  );
};
export default SingleNavLink;
