import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SidebarItemProps {
  icon: IconDefinition;
  text: string;
  onItemClick: () => void;
  active: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  onItemClick,
  active,
}) => {
  return (
    <li onClick={onItemClick} className={active ? "active" : ""}>
      <FontAwesomeIcon icon={icon} />
      <span className="menu">{text}</span>
    </li>
  );
};

export default SidebarItem;
