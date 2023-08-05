import { styled } from "styled-components";
import SingleJobStatsItem from "./SingleJobStatsItem";
import { useSelector } from "react-redux";
import { MdPendingActions } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { TbBugOff } from "react-icons/tb";
import JobAreaChart from "./charts/JobAreaChart";
import JobBarChart from "./charts/jobBarChart";
import { useGlobalContext } from "../context/globalContext";

const ChartsContainer = () => {
  const { stats, monthlyApplications: data } = useSelector(
    (store) => store.allJobs
  );

  const { theme } = useGlobalContext();

  const defaultStats = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <MdPendingActions />,
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <BsFillCalendarCheckFill />,
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <TbBugOff />,
    },
  ];

  const config = {
    labels: data.map((item) => item.date),

    datasets: [
      {
        label: "job count",
        data: data.map((item) => item.count),
        barThickness: 6,
        borderRadius: 8,
        fill: true,
        pointBackgroundColor: "rgb(156, 18, 123)",
        borderColor: "#05053c",
        backgroundColor: theme,
        hoverRadius: 8,
        cubicInterpolationMode: "monotone",
        borderJoinStyle: "bevel",
        responsive: true,
      },
    ],
  };

  return (
    <Wrapper>
      <h1 className="header">
        General <br /> Statistics
      </h1>

      <div className="stats-container">
        {defaultStats.map((item, index) => {
          return <SingleJobStatsItem key={index} {...item} />;
        })}
      </div>
      <div className="charts-container">
        <div className="barchart chart">
          <JobBarChart chartData={config} />
        </div>
        <div className="areachart chart">
          <JobAreaChart chartData={config} />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .header {
    color: var(--gray-200);
    font-size: 3rem;
    margin-top: 1rem;
  }

  .stats-container {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;

    @media (min-width: 1080px) {
      width: 50%;
    }
    @media (max-width: 992px) {
      grid-template-columns: 100%;
    }
  }

  .charts-container {
    margin-top: 4rem;
    display: grid;
    gap: 4rem;

    @media (min-width: 1080px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .chart {
    width: 50rem;
    position: relative;
    display: grid;
    gap: 1em;
    grid-template-rows: min-content minmax(0, 1fr) min-content;
    grid-template-columns: 1fr minmax(0, 3fr);

    @media (max-width: 992px) {
      width: 90vw;
      grid-template-columns: 100% minmax(0, 3fr);
    }
    @media (max-width: 502px) {
      width: 80vw;
      grid-template-columns: 100% minmax(0, 3fr);
    }
  }
  .barchart {
    background: linear-gradient(155deg, #14123b, #01091c);
    border-radius: var(--rounded-lg);
  }

  .areachart {
    background: var(--white);
    border-radius: var(--rounded-lg);
    padding: 0.7rem;
  }
`;

export default ChartsContainer;
