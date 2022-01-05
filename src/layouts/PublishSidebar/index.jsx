import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ROUTERS } from "../../constants/routers";

import * as S from "./styles";

function PublishSidebar({ isShowSidebar, setIsShowSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();

  const routers = [
    {
      name: "Product List",
      path: ROUTERS.PRODUCTS,
    },
    {
      name: "Create Product",
      path: ROUTERS.PRODUCT_CREATE,
    },
    {
      name: "Login",
      path: ROUTERS.LOGIN,
    },
    {
      name: "To Do List",
      path: ROUTERS.TODO_LIST,
    },
  ];

  const renderSidebarItems = () => {
    return routers.map((item, index) => {
      return (
        <S.SidebarItem
          key={index}
          active={location.pathname === item.path}
          onClick={() => {
            setIsShowSidebar(false);
            navigate(item.path);
          }}
        >
          {item.name}
        </S.SidebarItem>
      );
    });
  };

  return (
    <S.SidebarOverlay show={isShowSidebar}>
      <S.SidebarContainer>{renderSidebarItems()}</S.SidebarContainer>
      <S.SidebarOutside onClick={() => setIsShowSidebar(false)} />
    </S.SidebarOverlay>
  );
}

export default PublishSidebar;
