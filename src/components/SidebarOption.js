import React from "react";
import "../style/sidebarOption.css";

export default function SidebarOption({ active, text, Icon }) {
  return (
    // could use terniary, but this method adds --active modififier to an already existing css class
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}
