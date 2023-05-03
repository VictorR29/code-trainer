import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { List } from "../List/List";
import { FreeMode } from "../FreeMode/FreeMode";
import { Random } from "../Random/Random";
import { TimeMode } from "../TimeMode/TimeMode";
import { Container, Link } from "./styles";

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Container>
            <Link to="/lista-de-codigos">Lista de items</Link>
            <Link to="/modo-libre">Registrar por código</Link>
            <Link to="/modo-aleatorio">Aleatorio</Link>
            <Link to="/modo-contra-reloj">Contra reloj</Link>
          </Container>
        }
        />
        <Route exact path="/lista-de-codigos" element={<List />} />
        <Route exact path="/modo-libre" element={<FreeMode />} />
        <Route exact path="/modo-aleatorio" element={<Random />} />
        <Route exact path="/modo-contra-reloj" element={<TimeMode />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Home };