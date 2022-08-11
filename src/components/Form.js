import "./FormStyles.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Vaše jméno:</label>
        <input type="text"></input>
        <label>Email:</label>
        <input type="text"></input>
        <label>Předmět:</label>
        <input type="text"></input>
        <label>Zpráva:</label>
        <textarea rows="6" placeholder="Sem napiště Vaši zprávu:" />
        <button className="btn">Odeslat</button>
      </form>
    </div>
  )
}

export default Form