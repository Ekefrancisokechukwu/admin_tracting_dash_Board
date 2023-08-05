import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const JobBarChart = ({ chartData }) => {
  return <Bar data={chartData} />;
};

export default JobBarChart;
