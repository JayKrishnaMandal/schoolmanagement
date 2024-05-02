import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMale, faFemale } from "@fortawesome/free-solid-svg-icons";
import PieChart from "../../PieChart";

const DashboardSection: React.FC = () => {
  const boysCount = 246;
  const girlsCount = 145;

  const data = {
    labels: ["Boys", "Girls"],
    datasets: [
      {
        data: [boysCount, girlsCount],
        backgroundColor: ["#4CAF50", "#2196F3"],
        borderWidth: 1,
      },
    ],
  };

  //const [key, setKey] = useState(0); // Unique key for Pie component

  {
    /*const handleChartUpdate = () => {
    setKey((prevKey) => prevKey + 1); // Increment key to force remount
  };*/
  }

  return (
    <div className="chartdiv">
      <h2>Dashboard Section</h2>
      <div style={{ textAlign: "center" }}>
        <PieChart data={data} />
      </div>
      <div className="outer-box">
        <div className="boxes">
          <div className="box box-color2">
            <FontAwesomeIcon icon={faMale} />
            <div>Total Boys</div>
            <p>{boysCount}</p>
          </div>
          <div className="box box-color1">
            <FontAwesomeIcon icon={faFemale} />
            <div>Total Girls</div>
            <p>{girlsCount}</p>
          </div>
        </div>
        <div className="box">
          <div className="box box-color3">
            <FontAwesomeIcon icon={faMale} />
            <FontAwesomeIcon icon={faFemale} />
            <div>Total Students</div>
            <p>{girlsCount + boysCount}</p>
          </div>
        </div>
      </div>
      {/*<button onClick={handleChartUpdate}>Update Chart</button>{" "}
      {/* Example of chart update */}
    </div>
  );
};

export default DashboardSection;
