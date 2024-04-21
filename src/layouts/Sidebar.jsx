import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Kitchen,
} from "@mui/icons-material";
import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";

const MySidebar = ({
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  const navigator = useNavigate();
  return (
    <ProSidebar
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggleSidebar}
      // breakPoint="sm"
      // style={{ height: "100vh", position: "fixed", top: 0, left: 0 }}
    >
      {/* Header */}
      <SidebarHeader>
        <Menu iconShape="circle">
          {collapsed ? (
            <MenuItem
              icon={<KeyboardArrowRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<KeyboardArrowLeft />}
              onClick={handleCollapsedChange}
            >
              <div
                style={{
                  padding: "9px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 13,
                  letterSpacing: "1px",
                }}
              >
                Smart Refrigerator
              </div>
            </MenuItem>
          )}
        </Menu>
      </SidebarHeader>
      {/* Content */}
      <SidebarContent>
        <Menu iconShape="circle">
          <SubMenu title={"Refrigerator"} icon={<Kitchen />}>
            <MenuItem onClick={() => navigator("/refrigerator/1")}>
              Number 1
            </MenuItem>
          </SubMenu>
          <MenuItem onClick={() => navigator("/")}>About</MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default MySidebar;
