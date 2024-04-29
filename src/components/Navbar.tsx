const Navbar = () => {
  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar") as HTMLDivElement; // Cast to HTMLDivElement
    if (sidebar) {
      sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px"; // Access style property safely
    }
  };

  return (
    <>
      <div className="navbar">
        <span className="menu-icon" onClick={toggleSidebar}>
          ☰
        </span>
        <span>Welcome, John Doe</span>
        <span className="profile-info">Your Profile Info</span>
      </div>
    </>
  );
};

export default Navbar;
