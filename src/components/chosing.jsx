import React, { act, useState } from 'react'

const Chosing = ({PlayerName, chose, qus, act}) => {

    function chosing(e){
        chose(e)
    }

    
  return (
    <>
        <span className='Info'>{PlayerName === "A" ? "Арсен" : "Дарина"} вибирає </span>
        <div className="chose">
            <button id='blue' onClick={(e) => {qus > 0 ? chosing("T") : ''}} className={qus === 0 ? "line-through" : ""}>Правда</button>
            <button id='red' onClick={(e) => {act > 0 ? chosing("A") : ''}} className={act === 0 ? "line-through" : ""}>Дія</button>
        </div>
    </>
  )
}

export default Chosing