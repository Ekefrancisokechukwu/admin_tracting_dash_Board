import { styled } from "styled-components";
import img from "../assets/img/business.svg";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { motion } from "framer-motion";

const Landing = () => {
  const varient = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        when: "beforeChildren",
        // mass: 0.4,
        damping: 10,
        staggerChildren: 0.7,
        duration: 0.4,
        delay: 0.1,
      },
    },
  };

  const childVarient = {
    hidden: {
      y: 30,
      opacity: 0,
    },

    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className="landing-container">
        <Header>
          <Logo />
        </Header>
        <Wrapper>
          <motion.div
            className="info"
            variants={varient}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={childVarient}>
              Business <span>Tracking</span> App{" "}
            </motion.h1>

            <motion.p variants={childVarient}>
              Fusce hendrerit libero mi, lacinia sodales elit tempor fermentum.
              Nunc pharetra lacus dui, eu mollis tellus interdum in. Ut sit amet
              tincidunt mi, vel ultricies tellus. Quisque eu ullamcorper nibh
            </motion.p>

            <motion.span variants={childVarient}>
              <Link to="/register" className="register-btn">
                Login/Register
              </Link>
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <img src={img} alt="vector" />
          </motion.div>
        </Wrapper>
      </div>
    </>
  );
};

const Header = styled.header`
  padding: 1rem 2rem;
  border-bottom: 0.5px solid #f1e5e5d2;

  @media (min-width: 379px) {
    padding: 1rem 5rem;
  }
`;

const Wrapper = styled.section`
  span {
    color: var(--primary-50);
  }

  h1 {
    font-size: 3rem;
    color: var(--gray-500);
  }
  p {
    margin-top: 2rem;
    color: var(--gray-90);
    font-size: 1.4rem;
    line-height: 2;
  }
  img {
    display: none;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    padding: 8rem 8rem;

    gap: 13rem;
    /* align-items: center; */

    img {
      display: block;
      width: 50rem;
      height: 40rem;
    }

    .info {
      margin-top: 6rem;
    }
  }

  @media (max-width: 1075px) {
    padding: 8rem 3rem;
    gap: 5rem;
  }

  .register-btn {
    display: inline-block;
    margin-top: 5rem;
    background: var(--primary-50);
    padding: 1rem 2rem;
    color: #fff;
    font-size: 1.5rem;
    transition: var(--transition);
    border-radius: var(--rounded);

    &:hover {
      box-shadow: var(--shadow-lg);
      transform: translateY(-0.3rem);
    }
  }
`;
export default Landing;
