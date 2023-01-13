import { Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './TodoItem.module.css';

export function TodoItem({ nametext, handleDeleteItem }){
  const [isChecked, setIsChecked] = useState(false);

  function handleChecked(event){
    setIsChecked(event.target.checked);
  }

  return(
    <>
      <div className={styles.todoListContent}>
        <div className={styles.todoListBoxItem}>
          <input type="checkbox" onChange={handleChecked} />
          <span className={(isChecked) ? styles.checked : styles.Nochecked}>
            {nametext}
          </span>
        </div>
        
          <Trash className={styles.buttonTrash} size={18} onClick={() => handleDeleteItem(nametext)} />
        
      </div>
    </>
  ); 
}