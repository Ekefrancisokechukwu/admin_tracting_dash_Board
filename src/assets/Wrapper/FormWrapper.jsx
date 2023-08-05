import { styled } from "styled-components";

const Wrapper = styled.div`
  .container {
  }

  .overlay {
    background: #0000009c;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 4;
    position: fixed;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
  }

  .overlay.visible {
    opacity: 1;
    visibility: visible;
  }

  .header {
    color: var(--gray-200);
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cancel {
    font-size: 2.4rem;
    cursor: pointer;
  }
  .form {
    position: fixed;
    z-index: 5;
    background: var(--white);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -150%);
    padding: 1.8rem;
    border-radius: var(--rounded-lg);
    width: 60rem;
    transition: var(--transition);

    @media (max-width: 603px) {
      width: 90%;
      height: 80vh;
      overflow: scroll;
    }
  }

  .form.invisible {
    opacity: 0;
    visibility: hidden;
  }
  .form.visible {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  .form-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 3rem;
    margin-top: 2rem;
  }

  .form-select {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: var(--rounded-lg);
    transition: 0.2s;

    &:focus {
      outline: var(--outline);
    }
  }
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

  .form-btn {
    text-transform: capitalize;
    background: linear-gradient(143deg, #1e293b, #334155, #0f172a);
    margin-top: 3rem;
    padding: 1.3rem;
    color: #ffff;
    border-radius: var(--rounded-lg);
    width: 13rem;
  }

  .btn-container {
    display: flex;
    gap: 3rem;
  }

  .form-option {
    text-transform: capitalize;
  }

  .clear-btn {
    background: transparent;
    color: var(--gray-200);
    border: 1px solid var(--gray-200);
  }
`;

export default Wrapper;
