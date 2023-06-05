import "./main.css";
import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space, Tooltip, message } from "antd";
import OverviewBoxes from "./OverviewBoxes";
import patients from "./patients.json";
import { useState } from "react";

function OPTION1() {
  return (
    <div>
      <div className="box-content dashboard active">
        <OverviewBoxes patients={patients} />
      </div>
    </div>
  );
}
export default OPTION1;
