import { styled } from "styled-components";
import { menuLinks } from "../utils/links";
import SingleNavLink from "./SingleNavLink";

const NavLinks = () => {
  return (
    <Wrapper>
      <h5 className="head">PAGES</h5>

      <div className="container">
        {menuLinks.map((menu, index) => {
          return <SingleNavLink key={index} {...menu} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 1rem;
  margin-top: 1rem;

  .container {
    margin-top: 2rem;
  }

  .head {
    font-size: 1.2rem;
    color: var(--gray-200);
  }

  .singlenavlinkhead {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .isOpen {
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
  }

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    font-size: 1.2rem;
    text-transform: capitalize;
    margin-top: 2rem;
    color: var(--gray-200);
  }

  .icon {
    background: #fff;
    padding: 0.6rem;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    border-radius: var(--rounded-lg);

    svg {
      font-size: 1.9rem;
      color: #04294ad2;
    }
  }

  .arrowdown {
    transition: var(--transition);
    margin-left: auto;
  }

  .link-list {
    margin-top: 1rem;
    padding: 0 1rem;
  }

  .content {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }

  .link {
    font-size: 1.2rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 1rem;
    color: var(--gray-100);
    padding: 0.2rem 0;
    cursor: pointer;
  }

  .dot {
    width: 0.6rem;
    height: 0.6rem;
    background: var(--gray-100);
    display: inline-block;
    border-radius: var(--rounded-full);
  }

  .link.active {
    color: var(--gray-200);

    .dot {
      transform: scale(1.5);
      background: var(--gray-200);
    }
  }
`;
export default NavLinks;
