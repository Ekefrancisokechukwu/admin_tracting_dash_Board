import { MdOutlineCancel } from "react-icons/md";
import Wrapper from "../assets/Wrapper/FormWrapper";
import Formrow from "./Formrow";
import { useDispatch, useSelector } from "react-redux";
import { closeForm, updateUser } from "../features/user/userSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ProfileForm = () => {
  const { isFormOpen, user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, lastName, email, location } = userData;

    if (!name || !lastName || !email || !location) {
      toast.error("Please Fill Out All Field");
      return;
    }
    dispatch(updateUser(userData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <div className="container">
        <div
          onClick={() => dispatch(closeForm())}
          className={isFormOpen ? "overlay visible" : "overlay"}
        ></div>
        <form
          onSubmit={handleSubmit}
          className={isFormOpen ? "form visible" : "form invisible"}
        >
          <h1 className="header">
            Profile
            <MdOutlineCancel
              className="cancel"
              onClick={() => dispatch(closeForm())}
            />
          </h1>

          <div className="form-content">
            <Formrow
              labelText="first name"
              name="name"
              type="name"
              value={userData.name}
              handleChange={handleChange}
            />
            <Formrow
              labelText="last name"
              name="lastName"
              type="lastName"
              handleChange={handleChange}
              value={userData.lastName}
            />
            <Formrow
              labelText="email"
              name="email"
              type="email"
              handleChange={handleChange}
              value={userData.email}
            />
            <Formrow
              labelText="location"
              name="location"
              type="text"
              value={userData.location}
              handleChange={handleChange}
            />
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="form-btn"
            disabled={isLoading}
          >
            {isLoading ? <div className="loader"></div> : "Save changes"}
          </motion.button>
        </form>
      </div>
    </Wrapper>
  );
};

export default ProfileForm;
