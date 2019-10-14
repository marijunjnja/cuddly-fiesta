import React, { useState } from 'react'
import './App.css'

const App = (props) => {
  const [ expenses, setExpenses ] = useState([])
  const [ income, setIncome ] = useState([])
  const [ credit, setCredit ] = useState(0)
  const [ total, setTotal ] = useState(0)


  return (
    <div>
      <h1 class='App-header'>Budget App</h1>
    </div>
  )
}

export default App
