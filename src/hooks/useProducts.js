import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProdutcs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("data/products.json");
        const data = await response.json();
        setProdutcs(data);
        setTimeout(() => {
          setLoading(false)
        }, 1500)
      } catch(error) {
        console.log(error);
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  return { products, setProdutcs, loading };
};

export {useProducts};
