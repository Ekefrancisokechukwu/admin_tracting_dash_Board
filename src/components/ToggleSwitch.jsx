import { styled } from "styled-components";

const ToggleSwitch = ({ check, name, handleChange }) => {
  return (
    <Wrapper>
      <label className="switch">
        <input
          type="checkbox"
          className="checkbox"
          name={name}
          onChange={handleChange}
          checked={check}
        />
        <span className="slider"></span>
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-width: 45px;
  height: 23px;
  display: inline-block;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ebe6e6;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: var(--rounded-lx);
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 17px;
    width: 17px;
    left: 3px;
    bottom: 2.7px;
    background-color: #fff;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: var(--rounded-full);
    box-shadow: var(--shadow-lg);
  }

  input:checked + .slider {
    background-color: #04294ad2;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(23.5px);
    -ms-transform: translateX(23.5px);
    transform: translateX(23.5px);
  }
`;

export default ToggleSwitch;
