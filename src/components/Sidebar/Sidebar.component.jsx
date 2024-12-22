import React, { useState } from "react";
import { scaleDown as Menu } from "react-burger-menu";
import "./Sidebar.component.css";

const Sidebar = () => {

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];
  
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle sidebar state
  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  // Toggle sidebar manually
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Sidebar menu */}
      <Menu
        isOpen={menuOpen}
        onStateChange={handleStateChange}
        width={"300px"} // Customize the sidebar width
      >
        {menuItems.map((item) => (
          <a className="menu-item" href={item.link} key={item.name}>
             {item.name}
          </a>
        ))}
      </Menu>
    </div>
  );
};

export default Sidebar;
