/* eslint-disable react/no-unescaped-entities */
import { styled } from "styled-components";
import img from "../assets/img/not-found.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div className="">
        <img
          src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/illustrations/error-404.png"
          alt="not found"
        />
        <h3>Opps!</h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link to="/" className="error-btn">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  padding: 2rem;
  place-items: center;

  img {
    width: 35rem;
  }

  @media (max-width: 370px) {
    img {
      width: 100%;
    }
  }

  h3 {
    font-size: 1.8rem;
    margin-top: 2rem;
  }

  p {
    font-size: 1.2rem;
  }

  .error-btn {
    font-size: 1.1rem;
    display: inline-block;
    margin-top: 1rem;
    background: var(--primary-50);
    color: var(--white);
    padding: 1.3rem;
    border-radius: 7px;
  }
`;

export default Error;
