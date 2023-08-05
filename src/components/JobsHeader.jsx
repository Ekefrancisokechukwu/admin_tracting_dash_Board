import AddJobForm from "./AddJobForm";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { openAddForm } from "../features/addJob/addJobSlice";

const JobsHeader = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <AddJobForm />
      <header className="header">
        <h1>Jobs info</h1>

        <span
          type="button"
          className="btn-primary btn-main"
          onClick={() => dispatch(openAddForm())}
        >
          Add Job
        </span>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem 0;

  .header {
    display: flex;
    align-items: center;
    gap: 3rem;

    h1 {
      font-size: 2.4rem;
      color: var(--gray-200);
      text-transform: capitalize;
    }
  }
`;
export default JobsHeader;
