import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";

import CreateProductForm from "./pages/CreateProductForm";
import LoginAndRegisterForm from "./pages/LoginAndRegister";
import ToDoList from "./pages/ToDoList";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

import PublishLayout from "./layouts/PublishLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import LoginLayout from "./layouts/LoginLayout";

import { ROUTERS } from "./constants/routers";

import { lightTheme, darkTheme } from "./constants/themes";

function App() {
  const [theme, setTheme] = useState("light");

  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || {}
  );
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "iPhone 12",
      price: 15000000,
      isNew: true,
    },
    {
      id: 2,
      name: "iPhone 12 Mini",
      price: 12000000,
      isNew: false,
    },
    {
      id: 3,
      name: "iPhone 12 Pro",
      price: 20000000,
      isNew: true,
    },
    {
      id: 4,
      name: "iPhone 12 Pro Max",
      price: 22000000,
      isNew: false,
    },
    {
      id: 5,
      name: "iPhone 13",
      price: 25000000,
      isNew: false,
    },
    {
      id: 6,
      name: "iPhone 13 Mini",
      price: 20000000,
      isNew: false,
    },
    {
      id: 7,
      name: "Galaxy S21",
      price: 15000000,
      isNew: false,
    },
    {
      id: 8,
      name: "Galaxy Note 20",
      price: 20000000,
      isNew: false,
    },
    {
      id: 9,
      name: "Xiaomi M11",
      price: 15000000,
      isNew: false,
    },
    {
      id: 10,
      name: "Oppo Reno 5",
      price: 18000000,
      isNew: false,
    },
  ]);

  const handleAddProduct = (values) => {
    setProductList([...productList, values]);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Routes>
        <Route
          path={ROUTERS.HOME}
          element={
            <PublishLayout
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              setTheme={setTheme}
            >
              <div>Home</div>
            </PublishLayout>
          }
        />
        <Route
          path={ROUTERS.PRODUCTS}
          element={
            <PublishLayout
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              setTheme={setTheme}
            >
              <ProductList productList={productList} />
            </PublishLayout>
          }
        />
        <Route
          path={ROUTERS.PRODUCT_DETAIL}
          element={
            <PublishLayout
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              setTheme={setTheme}
            >
              <ProductDetail productList={productList} />
            </PublishLayout>
          }
        />
        <Route
          path={ROUTERS.PRODUCT_CREATE}
          element={
            <PublishLayout
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              setTheme={setTheme}
            >
              <CreateProductForm handleAddProduct={handleAddProduct} />
            </PublishLayout>
          }
        />
        <Route
          path={ROUTERS.LOGIN}
          element={
            <LoginLayout>
              <LoginAndRegisterForm setUserInfo={setUserInfo} />
            </LoginLayout>
          }
        />
        <Route
          path={ROUTERS.TODO_LIST}
          element={
            <PrivateLayout userInfo={userInfo} setUserInfo={setUserInfo}>
              <ToDoList />
            </PrivateLayout>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
