import React, { useState } from "react";

import DashboardSection from "./DashboardSection";
import StudentsSection from "./StudentsSection"; // Import other section components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
// Import other section components...

const Dashboard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const renderSection = () => {
    switch (activeIndex) {
      case 0:
        return <DashboardSection />;
      case 1:
        return <StudentsSection />;
      // Render other sections similarly...
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <Sidebar onItemClick={(index) => setActiveIndex(index)} />
      <div className="content">{renderSection()}</div>
    </div>
  );
};

export default Dashboard;
