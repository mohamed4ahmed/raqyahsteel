import React, { useEffect } from "react";
import ProductsContainer from "../../containers/Products/Products";
const Products = () => {
  useEffect(() => {
    document.title = "Products - RAQYAH - For Metal";
  }, []);

  return (
    <>
      <ProductsContainer />
    </>
  );
};

export default Products;
