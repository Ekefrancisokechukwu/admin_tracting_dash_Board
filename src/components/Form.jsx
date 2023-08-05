import { styled } from "styled-components";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showPassword: false,
};

const Form = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user, navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please Fill Out All Fields");
      return;
    }

    if (isMember) {
      dispatch(loginUser({ email: email, password }));
      return;
    }

    dispatch(registerUser({ email, name, password }));
  };

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const togglePassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const toggleForm = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <header className="form-header">
          <Logo />

          <h1 className="form-info">
            {values.isMember ? "Login" : "Register"}
          </h1>
        </header>
        {/* input name */}
        {!values.isMember && (
          <div className="form-row">
            <label htmlFor="name" className="">
              Name
            </label>
            <AiOutlineUser className="icon" />

            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputs}
            />
          </div>
        )}

        {/* input email */}
        <div className="form-row">
          <label htmlFor="email" className="">
            Email
          </label>
          <HiOutlineMail className="icon" />
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleInputs}
          />
        </div>

        {/* input password */}
        <div className="form-row">
          <label htmlFor="password" className="">
            Password
          </label>
          <RiLockPasswordLine className="icon" />
          <input
            type={values.showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={values.password}
            onChange={handleInputs}
          />

          <div className="passwordicon" onClick={togglePassword}>
            {values.showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </div>
        </div>
        <button type="submit" className="form-btn" disabled={isLoading}>
          {isLoading ? <span className="loader"></span> : "submit"}
        </button>
        <button
          type="button"
          className="form-btn demo-btn"
          disabled={isLoading}
          onClick={() =>
            dispatch(
              loginUser({ email: "testUser@test.com", password: "secret" })
            )
          }
        >
          {isLoading ? <span className="loader"></span> : "Demo"}
        </button>

        <p className="form-footer">
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleForm}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 5rem auto;
  padding: 2rem;
  box-shadow: var(--shadow-lg);
  border-top: 2px solid var(--primary-50);
  color: var(--gray-500);
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-xl);
  }

  @media (min-width: 481px) {
    width: 35rem;
  }

  .form-header {
    text-align: center;
  }

  .form-info {
    margin: 2rem 0;
    font-size: 1.9rem;
  }

  label {
    font-size: 1.4rem;
  }

  .icon {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: #807d7d;
  }

  input {
    padding: 0.8rem;
    padding-left: 3.5rem;
    outline: 0;
    font-size: 1.3rem;
    border: 1px solid #b5b3b3;
    border-radius: var(--rounded);
  }

  .form-row {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    position: relative;
  }

  .passwordicon {
    position: absolute;
    right: 2rem;
    top: 3.6rem;
    z-index: 4;
    font-size: 1.6rem;
    cursor: pointer;
  }

  .form-btn {
    padding: 0.8rem;
    margin-top: 1.7rem;
    width: 100%;
    cursor: pointer;
    background: var(--primary-50);
    border: none;
    font-size: 1.5rem;
    color: var(--white);
    border-radius: var(--rounded);
    transition: var(--transition);

    &:hover {
      box-shadow: var(--shadow-lg);
      transform: translateY(-0.3rem);
    }
  }

  .form-footer {
    margin-top: 2rem;
    font-size: 1.4rem;
    text-align: center;

    button {
      margin-left: 2rem;
      cursor: pointer;
      background: none;
      border: 0;
      color: var(--primary-50);
      font-size: inherit;
    }
  }

  .demo-btn {
    background: #fca5a5;
  }
`;
export default Form;
