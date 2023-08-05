import { motion } from "framer-motion";
import { styled } from "styled-components";
import PieChart from "../charts/PieChart";
import { CiCircleInfo } from "react-icons/ci";
import LineChart from "../charts/LineChart";

// const

const ChartsContainer = () => {
  const channels = {
    labels: ["Facebook", "Direct", "Organic", "Referral"],

    datasets: [
      {
        data: [15, 20, 12, 60],
        backgroundColor: ["#22D3EE", "#C026D3", "#0F172A", "#94A3B8"],
        height: 200,
        outerWidth: 30,
      },
    ],
  };

  const revenu = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    maintainAspectRatio: true,
    datasets: [
      {
        label: "facebook",
        data: [10, 30, 40, 120, 150, 220, 280, 250, 280],
        backgroundColor: ["#22D3EE", "#C026D3", "#0F172A", "#94A3B8"],
        height: 200,
        pointBackgroundColor: "#05053c",
        borderColor: "#05053c",
        cubicInterpolationMode: "monotone",
        borderJoinStyle: "bevel",
        responsive: true,
        hoverRadius: 8,
      },
      {
        label: "Google",
        data: [50, 100, 200, 190, 400, 310, 500, 450, 700],
        backgroundColor: ["#22D3EE", "#C026D3", "#0F172A", "#94A3B8"],
        height: 200,
        pointBackgroundColor: "#C026D3",
        borderColor: "#C026D3",
        cubicInterpolationMode: "monotone",
        borderJoinStyle: "bevel",
        responsive: true,
        hoverRadius: 8,
      },
    ],
  };

  return (
    <Wrapper>
      <div className="pie">
        <div className="head">
          <h4>Channels</h4>
          <CiCircleInfo />
        </div>
        <div className="piechart">
          <PieChart data={channels} />
        </div>

        <div className="info">
          <p>
            More than <span>1,200,00</span>
            sales are made using referral marketing, and <span>700,000</span>
            are from social media
          </p>

          <button>Read More</button>
        </div>
      </div>
      <div className="line">
        <div className="head">
          <h4>Revenue</h4>
          <CiCircleInfo />
        </div>
        <div className="lineChart">
          <LineChart data={revenu} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(motion.section)`
  margin-top: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 502px) {
    grid-template-columns: 1fr;
  }

  .pie {
    background: var(--white);
    border-radius: 10px;
    padding: 1rem;
  }
  .head {
    display: flex;
    justify-content: space-between;

    h4 {
      color: var(--gray-200);
      font-size: 1.6rem;
      text-transform: capitalize;
    }

    svg {
      cursor: pointer;
      font-size: 2rem;
    }
  }

  .piechart {
    width: 23rem;
    margin: 0 auto;
    display: flex;
    margin-top: 2rem;
  }

  .info {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
      font-size: 1.3rem;
    }

    button {
      min-width: 11rem;
      color: #727070;
      background-color: #ccc;
      padding: 1rem 2rem;
      border-radius: 9px;
    }
  }

  .line {
    padding: 1rem;
    border-radius: 10px;
    background: var(--white);
    grid-template-rows: min-content minmax(0, 1fr) min-content;
    width: 100%;
  }

  .lineChart {
    display: grid;
    gap: 1em;
    position: relative;
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    width: auto;

    grid-template-rows: min-content minmax(0, 1fr) min-content;
    grid-template-columns: minmax(0, 1fr);

    /* @media (max-width: 992px) {
      width: 90vw;
      grid-template-columns: 100% minmax(0, 3fr);
    }
    @media (max-width: 502px) {
      width: 80vw;
      grid-template-columns: 100% minmax(0, 3fr);
    } */
  }
`;
export default ChartsContainer;
