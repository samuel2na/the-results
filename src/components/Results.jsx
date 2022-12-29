import styles from './Results.module.css';

export function Results({ theTitle, theValue }){
  return(
    <>
      <div className={styles.results}>
        <span>{theTitle}</span>
        <label>{theValue}</label>
      </div>
    </>
  )
}