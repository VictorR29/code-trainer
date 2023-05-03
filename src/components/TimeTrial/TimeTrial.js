import React, { useState } from "react";
import { useRandomCP } from "../../hooks/useRandomCP";
import { ProductContainer, Product } from "../../GlobalStyles/ProductContainer";
import { SearchBar } from "../SearchBar/SearchBar";
import { Button } from "../../GlobalStyles/Button";
import { Timer } from "../Timer/Timer";
import { TimeOut, Points, Hits, Mistakes } from "./styles";

const TimeTrial = () => {
  const [running, setRunning] = useState(false);
  const { randomItem, hits, errors, searchValue, valueChange, handleButtonClick } = useRandomCP(["product"]);

  return (
    <>
      <Points>
        <Hits>Aciertos: <span>{hits}</span></Hits>
        <Mistakes>Errores: <span>{errors}</span></Mistakes>
      </Points>
      {
        running ? 
          <ProductContainer as="div">
            <Product>{randomItem}</Product>
          </ProductContainer> 
          : <TimeOut>Tiempo agotado!? vuelva a intentarlo!</TimeOut>
      }
      <Timer running={running} setRunning={setRunning}/>
      <SearchBar
        value={searchValue}
        onChange={valueChange}
        placeholder='Ingresa el valor correcto'
      />
      
      <Button onClick={handleButtonClick}>
        Comprobar!
      </Button>
    </>
  );
};

export { TimeTrial };