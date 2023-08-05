import { motion } from "framer-motion";
import { styled } from "styled-components";

const Stats = () => {
  return (
    <Wrapper>
      <div className="stats">
        <div className="subhead">
          <h4>Sales</h4>
          6May - 7 May
        </div>

        <h2 className="amount">$230,220</h2>

        <div className="footer">
          <span>+55</span> since last month
        </div>
      </div>
      <div className="stats">
        <div className="subhead">
          <h4>Customers</h4>
          6May - 7 May
        </div>

        <h2 className="amount">$230,220</h2>

        <div className="footer">
          <span>+12</span> since last month
        </div>
      </div>
      <div className="stats">
        <div className="subhead">
          <h4>Avg. Revenue</h4>
          6May - 7 May
        </div>

        <h2 className="amount">$1.200</h2>

        <div className="footer">
          <span>+55</span> since last month
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 502px) {
    grid-template-columns: 1fr;
  }

  .stats {
    background: var(--white);
    padding: 1rem;
    border-radius: 10px;
  }

  .subhead {
    display: flex;
    justify-content: space-between;
    color: var(--gray-100);

    h4 {
      font-size: 1.2rem;
    }
  }

  .amount {
    margin-top: 1rem;
    font-size: 1.8rem;
    color: var(--gray-200);
  }

  .footer {
    margin-top: 0.7rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1.3rem;
    text-transform: capitalize;

    span {
      color: #59bc1b;
      font-size: 1.4rem;
      font-weight: 600;
    }
  }
`;
export default Stats;
