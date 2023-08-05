import { styled } from "styled-components";
import { MdPendingActions } from "react-icons/md";
import { useGlobalContext } from "../context/globalContext";
import { useSelector } from "react-redux";

const SingleJobStatsItem = ({ title, count, icon }) => {
  const { theme } = useGlobalContext();
  const { isLoading } = useSelector((store) => store.allJobs);

  return (
    <Wrapper>
      <div>
        <h5 className="stats-header">{title}</h5>
        <h3 className="stats-count">
          {isLoading ? <span className="miniloader"></span> : count}
        </h3>
      </div>
      <div className="stats-icon" style={{ background: theme }}>
        {icon}{" "}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--white);
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border-radius: var(--rounded-lx);

  .stats-header {
    font-size: 1.3rem;
    text-transform: capitalize;
    color: var(--gray-100);
  }

  .stats-count {
    font-size: 2.1rem;
    color: var(--gray-200);
    margin-top: 0.7rem;
    position: relative;
  }

  .stats-icon {
    background: linear-gradient(130deg, #ec4899, #86198f);
    padding: 1rem 1.4rem;
    border-radius: var(--rounded-lg);
    min-width: 4.5rem;
    height: 4.5rem;
    display: grid;
    place-items: center;

    svg {
      font-size: 2rem;
      color: #fff;
    }
  }

  .miniloader,
  .miniloader:before,
  .miniloader:after {
    border-radius: 50%;
    width: 8px;
    height: 8px;
    animation-fill-mode: both;
    animation: bblFadInOut 1.8s infinite ease-in-out;
  }
  .miniloader {
    color: #b6b3b3;
    font-size: 3px;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }
  .miniloader:before,
  .miniloader:after {
    content: "";
    position: absolute;
    top: 0;
  }
  .miniloader:before {
    left: -1em;
    animation-delay: -0.32s;
  }
  .miniloader:after {
    left: 3.2em;
  }

  @keyframes bblFadInOut {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;
export default SingleJobStatsItem;
