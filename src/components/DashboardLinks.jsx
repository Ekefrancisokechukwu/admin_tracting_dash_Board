import { SiHomeassistantcommunitystore } from "react-icons/si";
import { HiChevronDown } from "react-icons/hi";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { dashboardlink } from "../utils/links";
import { useAccord } from "../customHooks";
import { useGlobalContext } from "../context/globalContext";

const DashboardLinks = () => {
  const { setIsOpen, isOpen, refContainer, refItem } = useAccord();

  const { theme } = useGlobalContext();

  return (
    <Wrapper>
      <div className="pagetoggle" onClick={() => setIsOpen(!isOpen)}>
        <span style={{ background: theme }} className="icontoggle">
          <SiHomeassistantcommunitystore />
        </span>

        <h2 className="header">Dashboards</h2>

        <HiChevronDown style={isOpen ? { transform: "rotate(180deg)" } : ""} />
      </div>
      <div className="dashboard-links" ref={refContainer}>
        <ul ref={refItem}>
          {dashboardlink.map((link, index) => {
            return (
              <li key={index} className="nav-list">
                <NavLink className="link">
                  <span className="check"></span>
                  {link.text}
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
  margin-top: 2rem;

  .pagetoggle {
    display: flex;
    width: 20rem;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1.4rem;
    background: #fbf9f9;
    border-radius: var(--rounded-lg);
    cursor: pointer;
    box-shadow: var(--shadow-lg);

    svg {
      color: #04294ad2;
    }
  }

  .dashh2 {
    opacity: 0;
    visibility: hidden;
  }

  .pagetoggle.isOpen {
    width: 6rem;
  }

  .header {
    font-size: 1.3rem;
    color: #04294ad2;
  }

  .icontoggle {
    /* background: {theme} */
    padding: 0.8rem;
    border-radius: var(--rounded-lg);

    svg {
      color: #cbc8c8;
    }
  }

  .dashboard-links {
    transition: var(--transition);
    margin-top: 1rem;
    height: 0;
    overflow: hidden;

    .link {
      color: var(--gray-100);
      /* font-size: 1.2rem; */
      margin-top: 2rem;
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    ul {
      padding: 0 1.3rem;

      li {
        text-transform: capitalize;
      }

      .check {
        width: 0.6rem;
        height: 0.6rem;
        display: inline-block;
        background: var(--gray-100);
        border-radius: var(--rounded-full);
      }
    }
  }
`;
export default DashboardLinks;
