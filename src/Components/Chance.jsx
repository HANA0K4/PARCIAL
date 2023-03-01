import React, { useState } from "react";

export const Chance = () => {
  const [chancesArray, setChancesArray] = useState({});
  const [chances, setChances] = useState([{ numeroChance: "", valorChance: "" }]);

  const cambiarTexto = (e) => setChancesArray({ ...chancesArray, [e.target.name]: e.target.value });
  
  const addChance = () => {
    if (chancesArray.numeroChance.trim() === "" || chancesArray.valorChance.trim() === "") {
      alert("Por favor ingrese un valor");
    } else {
      setChances([...chances, { ...chancesArray }]);
      setChancesArray({ numeroChance: "", valorChance: "" });
    }
  };
  const totalValorChances = chances.reduce((total, chance) => total + parseInt(chance.valorChance), 0);


  return (
    <>
      <br />
      <input type="number" placeholder="Ingrese el número a jugar" name="numeroChance" value={chancesArray.numeroChance} onChange={cambiarTexto} />
      <br />
      <input type="number" placeholder="Ingrese el valor a jugar" name="valorChance" value={chancesArray.valorChance} onChange={cambiarTexto} />

      <button onClick={addChance}>Jugar Chance</button>
      <ul>
        {chances.map((chance, index) => (
          <li key={index}>
            Número Jugado: {chance.numeroChance} - Valor Jugado: {chance.valorChance}
          </li>
        ))}
      </ul>
      <p>Total de valor de chances: {totalValorChances}</p>
    </>
  );
};








