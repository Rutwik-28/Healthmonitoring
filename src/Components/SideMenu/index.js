import { Button,Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    AppstoreOutlined,
    ContainerOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    MenuUnfoldOutlined
  } from '@ant-design/icons';

function SideMenu(){
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
      };
    
    return( 
    <div className="SideMenu">
         <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
        <Menu
            
            onClick={(items) => {
                navigate(items.key);
            }}
            inlineCollapsed={collapsed}
            items={[
               {
                label:"OPTION-1",
                key:'/',
               },
               {
                label:"OPTION-2",
                key:'/op1',
               },
               {
                label:"OPTION-3",
                key:'/op2',
               },
               {
                label:"OPTION-4",
                key:'/op3',
               },
               {
                label:"OPTION-5",
                key:'/op4',
               },
               
            ]}
        ></Menu>
    </div>
    );
 }
 export default SideMenu