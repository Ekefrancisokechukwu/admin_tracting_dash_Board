/* eslint-disable react/prop-types */
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const JobAreaChart = ({ chartData }) => {
  return <Line data={chartData} />;
};
export default JobAreaChart;
