import { styled } from "styled-components";
import Form from "../components/Form";
import { motion } from "framer-motion";
import login from "../assets/img/login.svg";
import register from "../assets/img/register.svg";
import { useState } from "react";

const Register = () => {
  return (
    <Wrapper>
      <img src={login} alt="vector" className="img" />
      <motion.div
        initial={{ x: -350, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Form />
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 2rem;

  @media (min-width: 379px) {
    padding: 4rem 4rem;
  }

  .img {
    display: none;
  }

  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;

    .img {
      width: 30rem;
      display: block;
    }
  }
`;

export default Register;
