import { useEffect } from "react";
import { useChance } from "./useChance";
useEffect
export const Chance = () => {
  const{chances, numeroChance, valorChance, agregarChance, sumarValorChances, setNumeroChance, setValorChance,eliminarChance,realizarPago,pagoRealizado} = useChance();
  useEffect(() => {
    console.log("Bienvenido a Chancería React!");
  }, []);

  return (
    <>
      <br />
      
      <div className="container">
        <h1>BIENVENIDO A CHANCERIA REACT</h1>
        <input type="number" placeholder="Ingrese el número a jugar" value={numeroChance} onChange={(e) => setNumeroChance(e.target.value)}/>
        <br />
        <input type="number" placeholder="Ingrese el valor a jugar"value={valorChance}onChange={(e) => setValorChance(e.target.value)}/>

        <button className="Agregar" onClick={agregarChance}>Jugar Chance</button>
        <br></br>
        <ul>
          {chances.map((chance, index) => (
            <li key={index}>
              Número Jugado: {chance.numeroChance} --- Valor Jugado: $ {chance.valorChance}
               <button className="Eliminar" onClick={() => eliminarChance(index)}>Eliminar Chance</button>
            </li>
          ))}
        </ul>
        <p>Total de valor de chances: $ {sumarValorChances()}</p>
        {pagoRealizado ? <p>Pago Realizado</p> : null}
        <button onClick={realizarPago}>Realizar Pago</button>
      </div>
    </>
  );
};





