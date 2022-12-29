import { useState } from 'react'
import { Results } from './Results';
import styles from './TheValues.module.css'

export function TheValues(){
  const [valueSum, setValueSum] = useState(0);
  const [valueSubtration, setValueSubtration] = useState(0);
  const [valueDivision, setValueDivision] = useState(0);
  const [valueMultiplication, setValueMultiplication] = useState(0);

  function handleCalcule(){
    let vlrA = parseInt(document.querySelector("#valueA").value);
    let vlrB = parseInt(document.querySelector("#valueB").value);
    let v = 1;
    //console.log(vlrA, vlrB);
    
    if(isNaN(vlrA) || isNaN(vlrB)) { 
      alert("Informe números válidos!");
      vlrA = 0; vlrB = 0; v = 0;
    }

    setValueSum(vlrA + vlrB);
    setValueSubtration(vlrA - vlrB);
    setValueDivision(((v == 0)? 0 : vlrA / vlrB));
    setValueMultiplication(vlrA * vlrB);
  }

  return(
    <>
    <div className={styles.container}>
      <h2>Informe abaixo os valores a serem calculados</h2>
      <div className={styles.inputValues}>
        <input id="valueA" type="text" placeholder="valor A"></input>
        <input id="valueB" type="text" placeholder="valor B"></input>
      </div>
      <button className={styles.bto} onClick={handleCalcule}>Calcular</button>
      <div>
        <h3>Resultados calculados: </h3>
      </div>
      <div className={styles.boxResults}>
        <Results theTitle="Soma: " theValue={valueSum} />
        <Results theTitle="Subtração: " theValue={valueSubtration} />
        <Results theTitle="Divisão: " theValue={valueDivision} />
        <Results theTitle="Multiplicação: " theValue={valueMultiplication} />
      </div>
    </div>
    </>
  )
}