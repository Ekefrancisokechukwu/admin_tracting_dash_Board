import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { clearFilters, handleChange } from "../features/jobs/alljobsSlice";
import { useState, useMemo } from "react";

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState("");

  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);

  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  // const debounce = (e) => {
  //   let timeoutID;
  //   return () => {
  //     setLocalSearch(e.target.value);
  //     clearTimeout(timeoutID);
  //     timeoutID = setTimeout(() => {
  //       dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  //     }, 1000);
  //   };
  // };

  // const optimixeDebounce = useMemo(() => debounce(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch("");
    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <div className="container">
        <h3 className="header">Search Job</h3>
        <form className="form">
          <div className="form-row">
            <label htmlFor="search" className="label">
              search
            </label>
            <div className="search-box">
              <FiSearch className="searchIocn" />
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Type here..."
                className="input"
                value={search}
                onChange={handleSearch}
              />
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="searchStatus" className="label">
              status
            </label>
            <select
              name="searchStatus"
              value={searchStatus}
              onChange={handleSearch}
              id="searchStatus"
              className="input"
            >
              {["all", ...statusOptions].map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="type" className="label">
              type
            </label>
            <select
              name="searchType"
              value={searchType}
              id="type"
              className="input"
              onChange={handleSearch}
            >
              {["all", ...jobTypeOptions].map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="sort" className="label">
              sort
            </label>

            <select
              name="sort"
              id="sort"
              value={sort}
              onChange={handleSearch}
              className="input"
            >
              {sortOptions.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <button
            type="button"
            className="clear-btn btn-primary"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear filters
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--white);
  padding: 1rem;
  border-radius: var(--rounded-lg);

  .header {
    font-size: 1.5rem;
  }

  .form {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .search-box {
    display: flex;
    align-items: center;
    position: relative;

    &:focus {
      outline: var(--outline);
    }

    input {
      padding-left: 3rem;
      width: 18rem;
    }
  }

  .searchIocn {
    position: absolute;
    left: 1rem;
  }

  .form-row {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .label {
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .input {
    border: 1px solid #d4d2d2;
    padding: 0.6rem;
    border-radius: var(--rounded-lg);
    width: 15rem;

    &:focus {
      outline: var(--outline);
    }
  }
  .clear-btn {
    border: 1px solid var(--gray-90);
    color: var(--gray-100);
    align-self: last baseline;
  }
`;
export default SearchContainer;
