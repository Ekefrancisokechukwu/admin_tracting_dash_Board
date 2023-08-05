import { HiChevronDown } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { useAccord } from "../customHooks";
import { useGlobalContext } from "../context/globalContext";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";

const SubmenuChild = ({ head, children }) => {
  const { setIsOpen, isOpen, refContainer, refItem } = useAccord();
  const { deskScreen } = useGlobalContext();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h4 className="link" onClick={() => setIsOpen(!isOpen)}>
        <span className="dot"></span> {head}{" "}
        <HiChevronDown
          className="arrowdown"
          style={isOpen ? { transform: "rotate(180deg)" } : ""}
        />
      </h4>

      <div className="content" ref={refContainer}>
        <ul className="list" ref={refItem}>
          {children.map((link, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className="link"
                  onClick={() =>
                    deskScreen ? dispatch(toggleSidebar()) : null
                  }
                >
                  <span className="dot"></span> {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default SubmenuChild;
