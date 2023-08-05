import { styled } from "styled-components";

const Formrow = ({ name, labelText, type, handleChange, value }) => {
  return (
    <Wrapper>
      <div className="formrow">
        <label htmlFor={name} className="form-label">
          {" "}
          {labelText || name}
        </label>
        <input
          type={type}
          value={value}
          id={name}
          name={name}
          className="form-input"
          onChange={handleChange}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .formrow {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .form-input {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: var(--rounded-lg);
    transition: 0.2s;

    &:focus {
      outline: var(--outline);
    }
  }

  .form-label {
    color: var(--gray-200);
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export default Formrow;
