import React from "react";

import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { productsData } from "../../utils/data";
import { BsStar } from "react-icons/bs";
import { useState } from "react";
import { formatPrice } from "../../utils/helpers";
import SingleProdOverlay from "./SingleProdOverlay";

const SingleProduct = () => {
  const { id } = useParams();
  let prodId = Number(id);

  const product = productsData.find((prod) => prod.id === prodId);

  const { category, images, name, price, quantity, status } = product;

  const [image, setImage] = useState({ img: "", i: 1 });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const controlModal = (image, i) => {
    setImage({ img: image, i });
  };

  const nextBtn = () => {
    let newImg = image.i + 1;
    if (newImg > images.length - 1) {
      newImg = 1;
    }
    setImage({ img: images[newImg], i: newImg });
  };

  const prevBtn = () => {
    let newImg = image.i - 1;

    if (newImg < 1) {
      newImg = images.length - 1;
    }
    setImage({ img: images[newImg], i: newImg });
  };

  return (
    <Wrapper>
      <div className="gallery">
        <div className="first-img">
          <img src={images[0]} alt={name} className="img" />
        </div>
        <div className="footer-img">
          {images.map((image, i) => (
            <img
              src={image}
              key={i}
              className="img img-dots"
              onClick={() => {
                controlModal(image, i);
                setIsModalOpen(!isModalOpen);
              }}
            />
          ))}
        </div>
      </div>

      <div className="info">
        <h1 className="name">{name}</h1>
        <div className="rating">
          <span className="star">
            <BsStar />
          </span>
          <span className="star">
            <BsStar />
          </span>
          <span className="star">
            <BsStar />
          </span>
          <span className="star">
            <BsStar />
          </span>
          <span className="star">
            <BsStar />
          </span>
        </div>

        <div className="pricing">
          <h3 className="subhead">Price</h3>
          <h2 className="price">{formatPrice(price)}</h2>
        </div>

        <div className="status">
          <span className={`status ${status}`}>{status}</span>
        </div>

        <div className="description">
          <h3 className="subhead">Description</h3>

          <ul className="description-list">
            <li>
              The most beautiful curves of this swivel stool adds an elegant
              touch to any environment
            </li>
            <li>Memory swivel seat returns to original seat position</li>
            <li>Comfortable integrated layered chair seat cushion design</li>
            <li>Fully assembled! No assembly required</li>
          </ul>
        </div>

        <div className="addtocart"></div>

        <button className="addtocart-btn">Add to cart</button>
      </div>

      <SingleProdOverlay
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        image={image}
        nextBtn={nextBtn}
        images={images}
        prevBtn={prevBtn}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--white);
  border-radius: 8px;
  margin-top: 3rem;
  display: grid;
  gap: 2rem;

  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .header {
    font-size: 2rem;
    color: var(--gray-200);
  }

  .first-img {
    width: 100%;

    height: auto;
    @media (min-width: 1100px) {
      height: 35rem;
      width: 90%;
    }
  }

  .img {
    border-radius: 9px;
  }

  .footer-img {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 10rem);
    gap: 1rem;

    @media (max-width: 539px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .img-dots {
    width: 100%;
    height: 10rem;
    /* height: auto; */

    cursor: pointer;
  }

  .name {
    font-size: 2.7rem;
    color: var(--gray-200);
  }

  .rating {
    margin-top: 1.2rem;
    display: flex;
    gap: 5px;
  }

  .star {
    svg {
      font-size: 1.8rem;
    }
  }

  .pricing {
    margin-top: 2rem;
    color: var(--gray-200);
  }

  .subhead {
    font-size: 1.3rem;
    color: var(--gray-200);
  }

  .price {
    font-size: 1.8rem;
    margin-top: 0.7rem;
  }

  .status {
    margin-top: 1rem;
  }

  .description {
    margin-top: 2rem;
  }

  .description-list {
    list-style: disc;
    margin-top: 1rem;
    padding: 0 1rem;

    @media (min-width: 1100px) {
    }

    li {
      font-size: 1.5rem;

      &:not(:first-child) {
        margin-top: 8px;
      }
    }
  }

  .addtocart {
    margin-top: 2rem;
  }

  .addtocart-btn {
    margin-top: 2rem;
    font-size: 1.3rem;
    color: #fff;
    border-radius: 6px;
    background: linear-gradient(to right, #ec4899, #c026d3);
    padding: 1rem 2rem;
    text-transform: uppercase;
    cursor: not-allowed !important;
  }
`;

export default SingleProduct;
