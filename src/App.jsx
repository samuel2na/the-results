import { useState } from 'react'
import { Header } from './components/Header'
import { TheValues } from './components/TheValues'

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <TheValues />
      </div>
    </>
  )
}

export default App
