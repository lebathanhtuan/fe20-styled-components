import React from "react";

import Item from "./components/Item";
import * as S from "./styles";

function ProductList({ productList, setSelectedProduct }) {
  const renderProductList = () => {
    return productList.map((item, index) => {
      return (
        <Item key={index} item={item} setSelectedProduct={setSelectedProduct} />
      );
    });
  };

  return (
    <>
      <S.Title>Danh sách sản phẩm</S.Title>
      <S.List>{renderProductList()}</S.List>
    </>
  );
}

export default ProductList;
