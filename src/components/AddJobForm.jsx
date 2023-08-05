import Wrapper from "../assets/Wrapper/FormWrapper";
import { motion } from "framer-motion";
import { MdOutlineCancel } from "react-icons/md";
import Formrow from "./Formrow";
import { useDispatch, useSelector } from "react-redux";
import FormrowSelect from "./FormrowSelect";
import {
  clearValues,
  closeAddForm,
  createJob,
  editJob,
  handleChange,
} from "../features/addJob/addJobSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

const AddJobForm = () => {
  const {
    isAddJobFormOpen,
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("please fill out all fields");
      return;
    }

    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { company, jobLocation, jobType, status, position },
        })
      );
      return;
    }

    dispatch(
      createJob({
        position,
        company,
        jobLocation,
        jobType,
        status,
      })
    );
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(
        handleChange({
          name: "jobLocation",
          value: user.location,
        })
      );
    }
  }, [dispatch, user.location, isEditing]);

  return (
    <Wrapper>
      <div className="container">
        <div
          onClick={() => {
            dispatch(clearValues());
          }}
          className={isAddJobFormOpen ? "overlay visible" : "overlay"}
        ></div>
        <form className={isAddJobFormOpen ? "form visible" : "form invisible"}>
          <h1 className="header">
            {isEditing ? "Edit job" : "Add job"}
            <MdOutlineCancel
              className="cancel"
              onClick={() => {
                dispatch(clearValues());
              }}
            />
          </h1>

          <div className="form-content">
            <Formrow
              name="position"
              type="text"
              value={position}
              handleChange={handleJobInput}
            />
            <Formrow
              name="company"
              type="text"
              handleChange={handleJobInput}
              value={company}
            />
            <Formrow
              labelText="job location"
              name="jobLocation"
              type="text"
              value={jobLocation}
              handleChange={handleJobInput}
            />

            <FormrowSelect
              name="status"
              value={status}
              list={statusOptions}
              handleChange={handleJobInput}
            />
            <FormrowSelect
              name="jobType"
              list={jobTypeOptions}
              value={jobType}
              labelText="job type"
              handleChange={handleJobInput}
            />
          </div>

          <div className="btn-container">
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              className="form-btn clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="form-btn"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? <div className="loader"></div> : "done"}
            </motion.button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
export default AddJobForm;
