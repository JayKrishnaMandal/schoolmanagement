const Sidebar = () => {
  return (
    <>
      {" "}
      <div className="sidebar">
        <ul>
          <li>
            <a href="#">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-user-graduate"></i> Students
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-chalkboard-teacher"></i> Teachers
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-school"></i> Classes
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-book"></i> Subjects
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-calendar-alt"></i> Timetable
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-file-invoice"></i> Exams
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-cog"></i> Settings
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
