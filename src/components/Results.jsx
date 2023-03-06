import styles from './Results.module.css';

export function Results({ theTitle, theValue, comp, legend }){
  return(
    <>
      <div className={styles.results}>
        <span>{theTitle}</span>
        <label>{theValue}</label>
        {(comp) ? <label>{comp}</label> : ""}
        {(legend) ? 
          <div className={styles.textLegend}>
            <label>{legend.replace("#vlr",theValue)}</label>
          </div> 
          : ""
        }
      </div>
    </>
  )
}