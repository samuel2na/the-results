import { useState } from 'react'
import { Results } from './Results';
import styles from './TheValues.module.css'

export function TheValues(){
  const [valueSum, setValueSum] = useState(0);
  const [valueSubtration, setValueSubtration] = useState(0);
  const [valueDivision, setValueDivision] = useState(0);
  const [valueMultiplication, setValueMultiplication] = useState(0);

  async function handleCalcule(){
    let vlrA = parseFloat(document.querySelector("#valueA").value);
    let vlrB = parseFloat(document.querySelector("#valueB").value);
    let v = 1;
    
    if(isNaN(vlrA) || isNaN(vlrB)) { 
      alert("Informe números válidos!");
      vlrA = 0; vlrB = 0; v = 0;
    }

    const vSum = await NumberFormating(vlrA + vlrB);
    const vSub = await NumberFormating(vlrA - vlrB);
    const vDiv = await NumberFormating(((v == 0)? 0 : vlrA / vlrB));
    const vMul = await NumberFormating(vlrA * vlrB);
    //console.log(vSum, vlrA, vlrB);

    setValueSum(vSum);
    setValueSubtration(vSub);
    setValueDivision(vDiv);
    setValueMultiplication(vMul);
  }

  async function NumberFormating(theNumber){
    return (theNumber).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  return(
    <>
    {/* <div className={styles.Geral}>

      <div className={styles.Anuncios}>
        anuncio 01
      </div> */}
      <div className={styles.container}>
        <h2>Informe abaixo os valores a serem calculados</h2>
        <div className={styles.inputValues}>
          <input id="valueA" type="number" placeholder="valor A"></input>
          <input id="valueB" type="number" placeholder="valor B"></input>
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
        <div className={styles.msgAtualizations}>
          <label>Em breve novas atualizações de cálculos...</label>
        </div>
      </div>

      {/* <div className={styles.anuncios}>
        <script async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6078704893663548"
          crossorigin="anonymous"
          >
        </script>
        <ins class="adsbygoogle"
            style="display:block;backiground-color:rgb(200,200,200);"
            data-ad-client="ca-pub-6078704893663548"
            data-ad-slot="7142047328"
            data-adtest="on"
            data-ad-format="auto"
            data-full-width-responsive="true">
          </ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div> */}

    {/* </div> */}
    </>
  )
}