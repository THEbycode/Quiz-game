import React, { act, useState } from 'react'

export const InputPage = ({qfa, qfd, afa, afd, curent}) => {

    const [questionForArsen, setQuestionForArsen] = useState("")
    const [questionForDarina, setQuestionForDarina] = useState("")

    const [actionForArsen, setActionForArsen] = useState("")
    const [actionForDarina, setActionForDarina] = useState("")

    function shuffel(array){
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function send_data(e){
        const char = "@"

        qfa(shuffel(questionForArsen.split("\n").map((e) => e.split(char)[1])))
        qfd(shuffel(questionForDarina.split("\n").map((e) => e.split(char)[1])))
        afa(shuffel(actionForArsen.split("\n").map((e) => e.split(char)[1])))
        afd(shuffel(actionForDarina.split("\n").map((e) => e.split(char)[1])))

        curent(2)
    }

  return (
    <>
        <div className="A">
            <span>Questions for Arsen</span>
            <textarea name="" id="" value={questionForArsen} onChange={(e) => {setQuestionForArsen(e.target.value)}}></textarea>
            <span>Action for Arsen</span>
            <textarea name="" id="" value={actionForArsen} onChange={(e) => {setActionForArsen(e.target.value)}}></textarea>
        </div>
        <div className="D">
            <span>Questions for Darina</span>
            <textarea name="" id="" value={questionForDarina} onChange={(e) => {setQuestionForDarina(e.target.value)}}></textarea>
            <span>Action for Darina</span>
            <textarea name="" id="" value={actionForDarina} onChange={(e) => {setActionForDarina(e.target.value)}}></textarea>
        </div>
        <div className="button">
            <button onClick={(e) => send_data()} >Start Game</button>
        </div>
    </>
  )
}
