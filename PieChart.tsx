import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";

import { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
ChartJs.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
    }[];
  };
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;
    if (chartInstance) {
      // Destroy any existing chart instance to prevent conflicts
      chartInstance.destroy();
    }
  }, [data]);

  return (
    <div style={{ width: "400px", height: "400px" }}>
      <Pie ref={chartRef} data={data} />
    </div>
  );
};

export default PieChart;
