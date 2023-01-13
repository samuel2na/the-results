import { useState } from 'react';
import { Header } from './components/Header';
import { TheValues } from './components/TheValues';
import { Sidebar } from './components/Sidebar';
import { TodoList } from './components/TodoList';

import styles from './App.module.css'
import './global.css'

function App() {
  const [btoTodo, setBtoTodo] = useState(0);
  const [btoCalc, setBtoCalc] = useState(0);

  async function handleLink(nameButton){
    //console.log(nameButton);
    if(nameButton == "todo") {
      setBtoTodo(1);
      setBtoCalc(0);
    } else if(nameButton == "calc") {
      setBtoTodo(0);
      setBtoCalc(1);
    }
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar handleLink={handleLink} />
        <main>
          {(btoTodo == 0 && btoCalc == 0) ? <span className={styles.textInitial}>Nada por aqui :D</span> : ""}
          {(btoTodo == 1) ? <TodoList /> : ""}
          {(btoCalc == 1) ? <TheValues /> : ""}
        </main>
      </div>
    </>
  )
}

export default App
