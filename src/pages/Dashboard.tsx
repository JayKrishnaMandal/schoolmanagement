import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <Navbar />
        <h1>Welcome to the School Management System!</h1>
        <p>
          This is the main content area where you can manage various aspects of
          your school.
        </p>

        {/* Additional student list items go here */}
      </div>
    </div>
  );
};

export default Dashboard;
