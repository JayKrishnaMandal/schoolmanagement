import React from "react";
import SidebarItem from "./SidebarItem";
import {
  faTachometerAlt,
  faUserGraduate,
  faChalkboardTeacher,
  faBook,
  faCalendarAlt,
  faClipboardList,
  faFileInvoice,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar: React.FC<{ onItemClick: (index: number) => void }> = ({
  onItemClick,
}) => {
  const sidebarItems = [
    { icon: faTachometerAlt, text: "Dashboard" },
    { icon: faUserGraduate, text: "Students" },
    { icon: faChalkboardTeacher, text: "Teachers" },
    { icon: faBook, text: "Courses" },
    { icon: faCalendarAlt, text: "Schedule" },
    { icon: faClipboardList, text: "Attendance" },
    { icon: faFileInvoice, text: "Fees" },
    { icon: faGraduationCap, text: "Grades" },
  ];

  return (
    <div className="sidebar">
      <ul>
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            onItemClick={() => onItemClick(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
