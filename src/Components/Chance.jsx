import { useState } from "react"
export const Chance = () =>{
  const [chancesArray,setChances] = useState({});
  const [chances,setChance] = useState([{numeroChance:0,valorChance:0}]);
  

  const cambiarTexto = e => setChances({ ...chancesArray, [e.target.name]: e.target.value })

    
  const AddChance = () => {
    if (chances.numeroChance == " " || chances.valorChance == " ") {
        alert("Por favor ingrese un valor")
    
    }else{
        setChance([...chances,{...chancesArray}])
        setChance("");
    }
}

   

return (
    <>
    <br></br>
      <input type="number" placeholder='Ingrese el numero a jugar' onChange={cambiarTexto}/>                                  
      <br></br>
      <input type="number" placeholder='Ingrese el valor a jugar' onChange = {cambiarTexto} />

      <button onClick={AddChance}>Jugar Chance </button>
      <ul>
        {chances.map(chance => 
        <li>{chance.numeroChance}{chance.numeroChance}</li>
        )}
      </ul>
    

    </>
  )
}







