import styles from './Header.module.css'

import LogoCalculo from '../assets/Calculo32px.png';

export function Header(){
  return(
    <>
      <header className={styles.header}>
        <img src={LogoCalculo} alt="Logotipo do ignite" />
        <label>Meus Resultados</label>
      </header>
    </>
  )
}