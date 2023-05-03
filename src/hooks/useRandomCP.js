import { useState, useEffect, useCallback, useRef } from "react";
import { useProducts } from "./useProducts";
import { useSearch } from "./useSearch";

const useRandomCP = (keys) => {
  const [randomItem, setRandomItem] = useState("");
  const [randomValue, setRandomValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [hits, setHits] = useState(0);
  const [errors, setErrors] = useState(0);
  const { products, loading } = useProducts();
  const { searchValue, valueChange } = useSearch(products, ["code", "product"]);

  const getRandomRef = useRef(() => {});
  const getRandom = useCallback(() => {
    let randomKey

    if(Array.isArray(keys) && keys.length > 1) {
      randomKey = keys[Math.floor(Math.random() * keys.length)];
      let randomIndex = Math.floor(Math.random() * products.length);
       if (products.length > 0) {
        setRandomItem(products[randomIndex][randomKey]);
        setRandomValue(products[randomIndex][randomKey === "code" ? "product" : "code"]);
      } else {
        return null;
      }
    } else {
      if (products.length > 0) {
        let randomIndex = Math.floor(Math.random() * products.length);
        setRandomItem(products[randomIndex][keys]);
        setRandomValue(products[randomIndex][randomKey === "code" ? "product" : "code"]);
      } else {
        return null;
      }
    }
  }, [products, keys]);

  useEffect(() => {
    getRandomRef.current = getRandom;
  }, [getRandom]);

  useEffect(() => {
    getRandomRef.current();
  }, [products]);

  const handleButtonClick = () => {
    if (searchValue.toLowerCase() === randomValue.toLowerCase()) {
      setHits(hits + 1);
      setIsCorrect(true);
      valueChange("");
      getRandom();
    } else {
      setErrors(errors + 1);
      setIsCorrect(false);
      valueChange("");
    }
  }

  return { randomItem, isCorrect, hits, errors, searchValue, valueChange, loading, handleButtonClick };
}

export { useRandomCP };