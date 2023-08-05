import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const LineChart = ({ data }) => {
  return <Line data={data} options={{ responsive: true }} />;
};
export default LineChart;
