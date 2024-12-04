import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { useEffect } from "react";
import { fetchProducts } from "../store/productSlice";

const useProducts = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { products, status, error } = useSelector(
    (state: {
      products: {
        products: {
          id: number;
          title: string;
          imageUrl: string;
          price: number;
        }[];
        status: string;
        error: string;
      };
    }) => state.products
  );
  return { products, status, error };
};

export default useProducts;
