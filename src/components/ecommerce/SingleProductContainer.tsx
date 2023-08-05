import React from "react";
import { styled } from "styled-components";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";

const SingleProductContainer = () => {
  return (
    <Wrapper>
      <header className="header">
        <h1>product details</h1>

        <Link className="back-btn" to="/productlist">
          Back to shop
        </Link>
      </header>
      <SingleProduct />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--white);
  border-radius: 8px;
  padding: 2rem;

  @media (max-width: 391px) {
    padding: 2rem 1rem;
  }
  .header {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 1.8rem;
      color: var(--gray-200);
      text-transform: capitalize;
      font-weight: 500;
    }
  }

  .back-btn {
    color: var(--gray-200);
    padding: 0.8rem;
    border: 1px solid var(--gray-200);
    border-radius: 5px;
    text-transform: capitalize;
    font-weight: 600;
  }
`;

export default SingleProductContainer;
