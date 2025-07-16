import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    key: 1,
    label: <a href="/">Homepage</a>,
  },
  {
    key: 2,
    label: <a href="/profiles">Profiles Page</a>,
  },
];

function Navbar() {
  return (
    <div>
      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={["2"]}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
      />
    </div>
  );
}

export default Navbar;
