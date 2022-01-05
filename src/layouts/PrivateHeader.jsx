import React from "react";
import { Button, Menu, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { ROUTERS } from "../constants/routers";

function PrivateHeader({
  isShowSidebar,
  setIsShowSidebar,
  userInfo,
  setUserInfo,
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setUserInfo({});
    navigate(ROUTERS.LOGIN);
  };

  return (
    <div className="header">
      <div>
        <Button
          type="text"
          icon={<MenuOutlined style={{ color: "white" }} />}
          onClick={() => setIsShowSidebar(!isShowSidebar)}
        ></Button>
        Logo
      </div>
      {userInfo.id ? (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>Thông tin cá nhân</Menu.Item>
              <Menu.Item onClick={() => handleLogout()}>Đăng xuất</Menu.Item>
            </Menu>
          }
          trigger={["click"]}
        >
          <div>Hello {userInfo.username}</div>
        </Dropdown>
      ) : (
        <Button onClick={() => navigate(ROUTERS.LOGIN)}>Đăng nhập</Button>
      )}
    </div>
  );
}

export default PrivateHeader;
