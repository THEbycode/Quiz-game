import React from 'react'

export const Answer = ({text, playerChose, curent, answeringPlayer}) => {
  return (
    <div className="answer">
      <span className='Title'>{playerChose === "T" ? "Правда для" : "Дія для"} {answeringPlayer === 'A' ? "Арсена" : "Дарина"}</span>
      <br />
      <span className='Answer'>{text}</span>
      <button onClick={() => curent(2)} className='Next'>Далі</button>
    </div>
  )
}
