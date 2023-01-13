import { ListChecks, Calculator } from 'phosphor-react';
import styles from './Sidebar.module.css';

export function Sidebar({ handleLink }){

  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} 
          src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=40"
      />
      
      <div className={styles.profile}>
        <strong>Bem-Vindo</strong>
        <span>Escolha abaixo umas das opções</span>
      </div>
      
      <footer className={styles.buttonLink}>
        <button name="Todo" onClick={() => handleLink("todo")}>
          <ListChecks size={20}/> To.do list</button>
        <button name="Calc" onClick={() => handleLink("calc")}>
        <Calculator size={20}/> Cálculos</button>
      </footer>
    </aside>
  );
}