//component for each flashcard

import React, { useState } from 'react'
import { FaRandom } from "react-icons/fa"
import "./Flashcard.css"

const Flashcard = ({question,onPrev,onNext,currentIndex,total,onShuffle}) => {
    const [flipped,setFlipped] = useState(false);
    const [selected,setSelected]=useState(null);

    const handleOptionClick = (option) =>{
        setSelected(option);
        setFlipped(true);
    }
  return (
    <>
    <div className='container'>
    <div classNmae='card-container'>
      <h1>Flashcard Quiz</h1>
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className='card-face front'>
            <h3>{question.question}</h3>
<ul>
    {
        question.options.map((opt)=>(
            <li
                key={opt}
                className={selected === opt ? "selected" : ""}
                onClick={()=>handleOptionClick(opt)}>
                    {opt}
            </li>
        ))
    }
</ul>
        </div>
        <div className='card-face back'>
            <h4>Correct Answer:</h4>
            <p className={selected == question.answer ? "correct" : "wrong"}>{question.answer}</p>
        </div>
      </div>
      <div className='navigation'>
      <button onClick={onPrev} disabled ={currentIndex === 0}>Prev</button>
      <span>{currentIndex + 1 }/{total}</span>
      
      <button onClick={onNext} disabled ={currentIndex === total - 1}>Next</button>
      <button onClick={onShuffle}><FaRandom /></button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Flashcard
