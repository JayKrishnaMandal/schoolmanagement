import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon: IconDefinition;
  text: string;
  onItemClick: () => void;
}

const SidebarItem: React.FC<Props> = ({ icon, text, onItemClick }) => {
  return (
    <li onClick={onItemClick}>
      <FontAwesomeIcon icon={icon} />
      <span className="menu">{text}</span>
    </li>
  );
};

export default SidebarItem;
