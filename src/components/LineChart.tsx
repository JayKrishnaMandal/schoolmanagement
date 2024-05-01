import {
  Chart as ChartJs,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJs.register(Legend, LineElement, LinearScale, CategoryScale, PointElement);

const data = {
  labels: [
    "Baisakh",
    "jestha",
    "Asar",
    "shrawan",
    "Bhadra",
    "Ashwin",
    "kartik",
    "mangsir",
    "poush",
    "Magh",
    "falgun",
    "chaitra",
  ],
  datasets: [
    {
      label: "Monthly exam",
      data: [33, 53, 85, 41, 44, 65, 86, 74, 19, 56, 87, 90, 100],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      tension: 0.4,
    },
    {
      label: "Quaterly exam ",
      data: [33, 25, 35, 51, 54, 76, 100, 99, 57, 89, 89, 100],
      fill: false,
      borderColor: "#742774",
      tension: 0.4,
    },
  ],
};

const LineChart = () => {
  return <Line data={data} />;
};

export default LineChart;
