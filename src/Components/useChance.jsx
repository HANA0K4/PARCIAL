import { useState } from "react";

export const useChance = () => {
  const [chances, setChances] = useState([]);
  const [numeroChance, setNumeroChance] = useState("");
  const [valorChance, setValorChance] = useState("");
  const [pagoRealizado, setPagoRealizado] = useState(false);

  const agregarChance = () => {
    if (numeroChance.trim() === "" || valorChance.trim() === "") {
      alert("Por favor ingrese un valor");
    }else if (numeroChance.trim().length <= 3) {
        alert("El número jugado debe tener al menos 4 dígitos");}
        else {
            const nuevoChance = { numeroChance: numeroChance, valorChance: valorChance };
            setChances([...chances, nuevoChance]);
            setNumeroChance("");
            setValorChance("");
            }
  };
  const eliminarChance = (index) => {
    const newChances = [...chances];
    newChances.splice(index, 1);
    setChances(newChances);
  };

  const sumarValorChances = () => {
    return chances.reduce((total, chance) => total + parseInt(chance.valorChance), 0);
  };
  const eliminarTodosChances = () => {
    setChances([]);
  };
  const realizarPago = () => {setPagoRealizado(true);
    alert("¡Gracias por comprar tu chance! ¡Buena suerte!");
    eliminarTodosChances();
  };
  

  return { chances, 
    numeroChance, 
    valorChance, 
    agregarChance, 
    sumarValorChances, 
    setNumeroChance,
    eliminarChance, 
    setValorChance,realizarPago,setPagoRealizado };
};