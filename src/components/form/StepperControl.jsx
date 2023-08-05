import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context/globalContext";
import { steps } from "../../utils/data";

const StepperControl = () => {
  const { currentStep, handleClick, nextBtn } = useGlobalContext();
  console.log(currentStep);
  return (
    <Wrapper>
      <motion.button
        onClick={() => handleClick("prev")}
        whileHover={{ scale: [1.05, 1] }}
        type="button"
        className="btn btn-prev"
        style={
          currentStep === 1
            ? { visibility: "hidden" }
            : { visibility: "visible" }
        }
      >
        Prev
      </motion.button>

      <motion.button
        onClick={() => nextBtn()}
        whileHover={{ scale: [1.05, 1] }}
        type={"button"}
        disabled={false}
        className="btn btn-next"
      >
        {currentStep === steps.length ? "send" : "Next"}
      </motion.button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .btn {
    padding: 1.1rem 2.2rem;
    border-radius: var(--rounded-lg);
    text-transform: uppercase;
    transition: var(--transition);
    font-size: 1.1rem;
  }

  .btn-next {
    background: linear-gradient(to right, rgb(55 65 81), rgb(15 23 42));
    color: #fff;
  }
  .btn-prev {
    color: #0a0a24;
    background: #d5d3d3;
    box-shadow: 0 4px 8px #5a565659;
  }
`;
export default StepperControl;
