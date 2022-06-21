import React, { useState } from "react";
import ProtoTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [valor, setValor] = useState(value);

  const handleAdd = () => setValor(valor + 1);
  const handleSubtract = () => setValor(valor - 1);
  const handleReset = () => setValor(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{valor}</h2>
      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleSubtract}> -1 </button>
      <button onClick={handleReset}> Reset </button>
    </>
  );
};

CounterApp.protoTypes = {
  value: ProtoTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};

//npm i prop-types
