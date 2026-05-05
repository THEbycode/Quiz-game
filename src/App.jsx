import { use, useState } from 'react'
import './App.css'
import { InputPage } from './components/InputPage'
import Chosing from './components/chosing'
import { Answer } from './components/answer'
import GameEnd from './components/gameEnd'

function App() {

  const [curent, setCurent] = useState(1)
  const [currentPlayer, setCurrentPlayer] = useState(Math.floor(Math.random() * 2) + 1 === 1 ? "A" : "D")
  const [text, setText] = useState(undefined) 
  const [playerChose, setPlayerChose] = useState(undefined)
  const [answeringPlayer, setAnsweringPlayer] = useState(undefined)

  const [QFA, setQFA] = useState([])
  const [QFD, setQFD] = useState([])
  const [AFA, setAFA] = useState([])
  const [AFD, setAFD] = useState([])

  function decide(e){


      if (e === "T"){
        console.log(QFA.length,  QFD.length , AFA.length , AFD.length, QFA, QFD, AFA, AFD)
        setPlayerChose('T')
        if (currentPlayer === 'A') {setText(QFA[0]); QFA.shift()}
        else if (currentPlayer === 'D'){setText(QFD[0]); QFD.shift()}

    }else if (e === "A"){
      setPlayerChose('A')
      if (currentPlayer === 'A') {setText(AFA[0]);AFA.shift()}
      else if (currentPlayer === 'D'){setText(AFD[0]);AFD.shift()}
    }

    if (currentPlayer == 'A')if (QFA.length > 0 || AFA.length > 0){
        setCurrentPlayer("A")
      }else if (QFD.length > 0 || AFD.length > 0){
        setCurrentPlayer("D")
      } else{
        setCurent(4)
        return
      }

    if (currentPlayer == 'D')if (QFD.length > 0 || AFD.length > 0){
        setCurrentPlayer("D")
      }else if (QFA.length > 0 || AFA.length > 0){
        setCurrentPlayer("A")
      } else{
        setCurent(4)
        return
      }

    

    
    setAnsweringPlayer(currentPlayer)
    if (currentPlayer === "A"){
      if (QFD.length > 0 || AFD.length > 0){
        setCurrentPlayer("D")
      }  
    }
    else if (currentPlayer === "D"){
      if (QFA.length > 0 || AFA.length > 0){
        setCurrentPlayer("A")
      }  
    }

    setCurent(3)
    }
  

  return (
    <>
      {curent === 1 ? <InputPage qfa={setQFA} qfd={setQFD} afa={setAFA} afd={setAFD} curent={setCurent}/> : ''}
      {curent === 2 ? <Chosing PlayerName={currentPlayer} chose={decide} qus={currentPlayer === 'A' ? QFA.length : QFD.length} act={currentPlayer === 'A' ? AFA.length : AFD.length} /> : ''}
      {curent === 3 ? <Answer text={text} playerChose={playerChose} curent={setCurent} answeringPlayer={answeringPlayer}/> : ""}
      {curent === 4 ? <GameEnd/> : ""}
    </>
  )
}

export default App
