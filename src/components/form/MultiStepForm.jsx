import { styled } from "styled-components";
import StepperControl from "./StepperControl";
import FormStepper from "./FormStepper";
import { steps } from "../../utils/data";
import ProductInfo from "./steps/ProductInfo";
import Media from "./steps/Media";
import Price from "./steps/Price";
import { useGlobalContext } from "../../context/globalContext";

const displayStep = (step) => {
  if (step === 1) {
    return <ProductInfo />;
  }

  if (step === 2) {
    return <Media />;
  }

  if (step === 3) {
    return <Price />;
  }
};

const MultiStepForm = () => {
  const { currentStep } = useGlobalContext();
  return (
    <Wrapper>
      <FormStepper steps={steps} />
      <form className="form">
        {displayStep(currentStep)}
        <StepperControl />
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 3rem;

  .form {
    background: var(--white);
    margin: 5rem auto;
    padding: 1.4rem;
    box-shadow: var(--shadow-xl);
    width: 100%;
    border-radius: var(--rounded-lg);

    @media (min-width: 992px) {
      width: 70rem;
    }
  }

  .head {
    color: var(--gray-200);
    font-size: 2rem;
    text-transform: capitalize;
  }

  .input-container {
    margin: 2rem 0;
  }

  .box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    align-items: center;
    gap: 3rem;

    @media (max-width: 391px) {
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }
  }

  .file-upload {
    border: 1px solid #e1dfdfe1;
    height: 14rem;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
  }

  .img {
    width: 9rem;
    height: 9rem;
    object-fit: cover;
    border-radius: 10px;
  }

  .form-row {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-label {
    text-transform: capitalize;
    font-size: 1.1rem;
    color: var(--gray-200);
    font-weight: 800;
  }

  .form-textarea {
    background: transparent;
    border-radius: 8px;
    resize: none;
    border: 1px solid #e1dfdfe1;
    padding: 1rem;
    color: #ccc;
    font-size: 1.7rem;

    &:focus {
      outline: var(--outline);
    }
  }

  select {
    text-transform: capitalize;
    color: #ccc;
  }

  .form-input {
    padding: 0.7rem;
    font-size: 1.5rem;
    border: 1px solid #e1dfdfe1;
    border-radius: 9px;

    &:focus {
      outline: var(--outline);
    }
  }
`;
export default MultiStepForm;
