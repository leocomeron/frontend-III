import { createContext, useEffect, useState } from "react";

const initialValue = { categories: [], products: [] };

export const ProductsContext = createContext(initialValue);

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = async () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, categories }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
