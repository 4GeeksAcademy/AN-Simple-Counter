import React from "react";
import ContadorTotal from "./ContadorTotal.jsx";
import Contadorextra from "./contadorextra.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <ContadorTotal />
      <Contadorextra />
    </>
  );
};

export default Home;