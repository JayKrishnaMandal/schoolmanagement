import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMale, faFemale } from "@fortawesome/free-solid-svg-icons";
import PieChart from "../../PieChart";
import Calendar from "../components/Calendar";

// Importing the Calendar component

const DashboardSection: React.FC = () => {
  const boysCount = 246;
  const girlsCount = 145;
  const staffcounts = 19;
  const presentstaff = 17;

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

  return (
    <>
      <h2>Dashboard Section</h2>
      <div className="chartdiv">
        <div style={{ textAlign: "center" }}>
          <PieChart data={data} />
        </div>
        <div className="outer-box">
          <div className="box box-color1">
            <FontAwesomeIcon icon={faMale} />
            <FontAwesomeIcon icon={faFemale} />
            <div>Total Students</div>
            <p>{girlsCount + boysCount}</p>
          </div>
          <div className="box box-color3">
            <FontAwesomeIcon icon={faMale} />
            <FontAwesomeIcon icon={faFemale} />
            <div>Present Students</div>
            <p>{girlsCount + boysCount - 20}</p>
          </div>
          <div className="box box-color1">
            <FontAwesomeIcon icon={faMale} />

            <div>Total Staffs</div>
            <p>{staffcounts}</p>
          </div>
          <div className="box box-color3">
            <FontAwesomeIcon icon={faMale} />

            <div>Present Staff</div>
            <p>{presentstaff}</p>
          </div>
        </div>
      </div>

      <div className="calendar">
        {" "}
        <Calendar />
      </div>
    </>
  );
};

export default DashboardSection;
