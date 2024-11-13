import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../store/categorySlice";
import { AppDispatch } from "../store/store";

const useCategories = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const { categories, status, error } = useSelector(
    (state: {
      categories: {
        categories: {
          id: number;
          name: string;
          imageUrl: string;
          description: string;
        }[];
        status: string;
        error: string;
      };
    }) => state.categories
  );

  return { categories, status, error };
};

export default useCategories;
