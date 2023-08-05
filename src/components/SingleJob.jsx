import { styled } from "styled-components";
import { ImLocation2 } from "react-icons/im";
import { FaCalendarDays } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi2";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  deleteJob,
  openAddForm,
  setEditJob,
} from "../features/addJob/addJobSlice";
import moment from "moment/moment";

const SingleJob = ({
  company,
  createdAt,
  jobLocation,
  jobType,
  position,
  status,
  // updatedAt,
  _id,
}) => {
  const date = moment(createdAt).format("MMM Do, YYYY");
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <header className="header">
        <div className="charAt">
          <h2>{company.charAt(0)}</h2>
        </div>

        <div className="header-job">
          <article className="header-info">
            <h3 className="subhead">job position:</h3>
            <h5 className="info">{position}</h5>
          </article>
          <article className="header-info">
            <h3 className="subhead">company:</h3>
            <h5 className="info">{company}</h5>
          </article>
        </div>
      </header>
      <div className="content">
        <div className="job-info">
          <h5 className={`status ${status}`}>{status}</h5>
        </div>
        <div className="job-info">
          <FaCalendarDays />
          <h5>{date}</h5>
        </div>
        <div className="job-info">
          <HiBriefcase />
          <h5>{jobType}</h5>
        </div>
        <div className="job-info">
          <ImLocation2 />
          <h5>{jobLocation}</h5>
        </div>
      </div>
      <footer className="footer">
        <span
          className="job-btn"
          onClick={() => {
            dispatch(openAddForm());
            dispatch(
              setEditJob({
                editJobId: _id,
                company,
                createdAt,
                jobLocation,
                jobType,
                position,
                status,
              })
            );
          }}
        >
          <FaEdit />
        </span>
        <span className="job-btn" onClick={() => dispatch(deleteJob(_id))}>
          <RiDeleteBin6Fill />
        </span>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--rounded-lg);
  /* box-shadow: var(--shadow-lg); */

  .header {
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 1rem 1rem;
    border-bottom: 1px solid #cccccc61;
  }

  .header-job {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .header-info {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    text-transform: capitalize;
    flex-wrap: wrap;
  }
  .charAt {
    background-color: var(--gray-200);
    width: 5rem;
    padding: 1rem;
    border-radius: var(--rounded-lg);
    display: grid;
    place-items: center;

    h2 {
      color: var(--white);
      text-transform: capitalize;
    }
  }

  .subhead {
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--gray-200);
  }

  .info {
    font-size: 1.2rem;
  }

  .content {
    padding: 2rem 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    svg {
      color: var(--gray-100);
    }
  }
  .job-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.4rem;

    h5 {
      text-transform: capitalize;
    }
  }

  .footer {
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .job-btn {
    cursor: pointer;

    svg {
      font-size: 1.6rem;
    }
  }
`;
export default SingleJob;
