import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context/globalContext";

const SingleProdOverlay = ({
  isModalOpen,
  setIsModalOpen,
  image,
  nextBtn,
  images,
  prevBtn,
}) => {
  const overley_modal = {
    close: {
      opacity: 0,
      visibility: "hidden",
    },

    open: {
      opacity: 1,
      visibility: "visible",
      // transition: { duration: 0.3 },
    },
  };
  const { toggleFullScreen, isFullScreen } = useGlobalContext();

  return (
    <Wrapper
      as={motion.div}
      animate={isModalOpen ? "open" : "close"}
      variants={overley_modal}
    >
      <motion.div
        className="overlay"
        onClick={() => setIsModalOpen(!isModalOpen)}
      ></motion.div>
      <div className="controls">
        <div className="pag">
          <span>{image.i + 1}</span> / <span>{images.length}</span>
        </div>
        <div className="btn-conatainer">
          <button
            className="control-btn"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            Close
          </button>
          <button className="control-btn" onClick={toggleFullScreen}>
            {isFullScreen ? " Exit" : "fullscreen"}
          </button>
          <button className="control-btn" onClick={() => prevBtn()}>
            prev
          </button>
          <button className="control-btn" onClick={() => nextBtn()}>
            next
          </button>
        </div>
      </div>
      <div className="container">
        <img src={image.img} alt="img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .overlay {
    height: 100vh;
    width: 100vw;
    position: fixed;
    background: #000000f2;
    z-index: 10;
    top: 0;
    left: 0;
  }

  .controls {
    position: fixed;
    top: 1.5rem;
    z-index: 11;
    left: 50%;
    transform: translateX(-50%);
  }

  .container {
    position: fixed;
    z-index: 20;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 35rem;
    width: 35rem;

    @media (max-width: 391px) {
      width: 90%;
      height: 30rem;
    }

    img {
      border-radius: 10px;
    }
  }
  .pag {
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 1rem;
    color: #686464;
  }

  .btn-conatainer {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 320px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
  .control-btn {
    background: #f2efef;
    padding: 0.7rem;
    border-radius: 4px;
    text-transform: uppercase;
  }
`;

export default SingleProdOverlay;
