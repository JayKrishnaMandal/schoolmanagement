import {
  Chart as ChartJs,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJs.register(BarElement, LinearScale, CategoryScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Science", "Social", "Math", "optmath", "Computer", "Nepali"],
    datasets: [
      {
        label: "Marks",
        data: [78, 25, 50, 49, 75, 100],
        backgroundColor: "aqua",
        borderColor: "red",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Bar data={data}></Bar>
    </>
  );
};

export default BarChart;
