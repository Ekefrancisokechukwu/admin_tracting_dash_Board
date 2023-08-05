import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllJobs } from "../features/jobs/alljobsSlice";
import Loader from "./Loader";
import SingleJob from "./SingleJob";
import { GiEmptyHourglass } from "react-icons/gi";
import PageBtns from "./PageBtns";

const JobsContainer = () => {
  const dispatch = useDispatch();

  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    searchStatus,
    searchType,
    sort,
    search,
  } = useSelector((store) => store.allJobs);

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch, page, searchStatus, searchType, sort, search]);

  if (isLoading) {
    return (
      <Wrapper>
        <div className="job-center">
          <Loader />
        </div>
      </Wrapper>
    );
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <div className="job-center">
          <div className="">
            <GiEmptyHourglass />
            <h1 className="empty">No jobs found...</h1>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1 className="job-size">
        {totalJobs} Job{jobs.length > 1 && "s"} Found
      </h1>

      <div>
        <div className="container">
          {jobs.map((job) => {
            return <SingleJob key={job._id} {...job} />;
          })}
        </div>
        <div className="btn-box">{numOfPages > 1 && <PageBtns />}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem 0;

  .job-size {
    margin: 1rem 0;
    font-size: 1.7rem;
    color: var(--gray-200);
  }
  .container {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 1115px) {
      grid-template-columns: repeat(auto-fit, minmax(33rem, 1fr));
    }
    @media (max-width: 480px) {
      grid-template-columns: 100%;
    }
  }

  .btn-box {
    display: flex;
    justify-content: flex-end;
    padding-right: 4rem;
    @media (max-width: 480px) {
      justify-content: center;
      padding: 0;
    }
  }
  .empty {
    font-size: 2rem;
  }

  .job-center {
    height: 70vh;
    display: grid;
    place-items: center;
    text-align: center;

    svg {
      font-size: 4rem;
    }
  }
`;
export default JobsContainer;
