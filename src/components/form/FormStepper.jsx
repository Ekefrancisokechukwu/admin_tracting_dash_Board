import { styled } from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { useEffect, useRef, useState } from "react";

const FormStepper = ({ steps }) => {
  const { currentStep, handleStepperClick } = useGlobalContext();
  const [newStep, setNewStep] = useState([]);

  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newStep.length) {
      // current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [currentStep, steps]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={`wrapper-main ${
          index < newStep.length - 1 ? "wrapper" : ""
        }`}
      >
        <div className="content">
          {/* Display number */}
          <div
            onClick={() => handleStepperClick(index)}
            className={`number ${step.selected ? "step-active" : ""}`}
          ></div>
          <div className={`description ${step.highlighted ? "active" : ""}`}>
            <span>{index + 1}.</span>
            {step.description}
          </div>
        </div>
        {/* Display line */}
        <div className={`line ${step.completed ? "completed" : ""}`}></div>
      </div>
    );
  });

  return (
    <Wrapper>
      <div className="container">{displaySteps}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    display: flex;
    padding: 0.7rem;
    margin: 0 0.7rem;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;

    @media (min-width: 992px) {
      width: 60rem;
      border-radius: var(--rounded-lg);
    }
  }

  .wrapper {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .wrapper-main {
    display: flex;
    align-items: center;

    &:last-child .line {
      display: none;
    }
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gary-200);
  }

  .number {
    border-radius: var(--rounded-full);
    transition: var(--transition);
    border: 2px solid #cccccc9b;
    height: 15px;
    width: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 0;
    cursor: pointer;
  }

  .description {
    text-align: center;
    margin-top: 3rem;
    top: 0;
    font-size: 1.4rem;
    text-transform: capitalize;
    position: absolute;
    color: rgb(148 163 184);
    width: max-content;
    display: flex;
    gap: 3px;

    @media (max-width: 480px) {
      display: none;
    }
  }

  .active {
    color: var(--gray-200);
  }

  .line {
    display: flex;
    flex: auto;
    transition: var(--transition);
    border: 1px solid #cccccc9b;
  }

  .completed {
    border: 1px solid #04294ad2;
  }

  .step-active {
    background: #04294ad2;
    border: none;
    transform: scale(1.1);
  }
`;
export default FormStepper;
