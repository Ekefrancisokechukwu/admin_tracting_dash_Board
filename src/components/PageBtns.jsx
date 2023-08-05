import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { changePage } from "../features/jobs/alljobsSlice";

const PageBtns = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  // console.log(numOfPages);

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  return (
    <Wrapper>
      <button className="page-btn" onClick={prevPage}>
        <BsChevronLeft />
      </button>
      <div className="btn-container">
        {pages.map((num, index) => {
          return (
            <button
              key={index}
              onClick={() => dispatch(changePage(num))}
              className={num === page ? "page-btn active" : "page-btn"}
            >
              {num}
            </button>
          );
        })}
      </div>
      <button className="page-btn" onClick={nextPage}>
        <BsChevronRight />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 1rem;

  .btn-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .active {
    background: linear-gradient(130deg, #ec4899, #86198f);
    color: #fff;
    cursor: auto;

    &:hover {
      background: linear-gradient(130deg, #ec4899, #86198f) !important;
    }
  }

  .page-btn {
    min-width: 3.5rem;
    height: 3.5rem;
    border-radius: var(--rounded-full);
    border: 1px solid #ccc;
    color: #ccc;

    &:hover {
      background: var(--gray-50);
    }
  }
`;
export default PageBtns;
