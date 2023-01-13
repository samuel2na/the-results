import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { TodoItem } from './TodoItem';

import styles from './TodoList.module.css';

export function TodoList() {
  const [newItem, setNewItem] = useState('');
  const [myItens, setMyItens] = useState([]);

  function handleChangeItem(event){
    setNewItem(event.target.value);
  }

  function handleAddNewItem(){
    if(!newItem) return alert("Informe um item válido!");
    
    const isExistsNewItem = myItens.filter((f) => f.name == newItem);
    if(isExistsNewItem != "") return alert(`O item: ${newItem} já está cadastrado!`);

    const data = { 
      id: String(new Date().getTime()),
      name: newItem 
    }
    setMyItens(oldState => [...oldState, data]);
    
    let textInput = document.querySelector('[name="textItem"]');
    textInput.value = "";
    textInput.focus();
  }

  function handleDeleteItem(nameItem){
    const newMyItens = myItens.filter((f) => f.name != nameItem);
    
    setMyItens(newMyItens);
    setNewItem("");
  }

  return(
    <>
      <div className={styles.container}>
        <h1>Iniciar lista</h1>

        <div className={styles.todoListBox}>
          <input type="text" name="textItem" placeholder='Item da lista' onChange={handleChangeItem} />
          <button title='Adicionar item da lista' onClick={handleAddNewItem} >
            <PlusCircle size={20}/>
          </button>
        </div>
        
        {myItens.map((item) =>
          <TodoItem key={item.id} nametext={item.name} handleDeleteItem={handleDeleteItem} />
        )}
        
      </div>
    </>
  );
}