import { useEffect, useState } from "react";
import { getProductCategory } from "../services/apiProducts";

export function useCategory(categoryId) {
  const [category, setCategory] = useState({});

  useEffect(() => {
    getProductCategory(categoryId)
      .then((data) => setCategory(data))
      .catch((err) => console.error(err));
  }, [categoryId]);

  return category;
}
