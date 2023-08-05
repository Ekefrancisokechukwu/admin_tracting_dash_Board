import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  return <Pie data={data} options={{ responsive: true }} />;
};
export default PieChart;
