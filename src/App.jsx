import React, { useState } from 'react'
import Flashcard from './Flashcard';
import questions from './questions';
import "./App.css";

   //moving through cards with NEXT and PREV
 


const App = () => {
    const [cards, setCards]=useState(questions);
    const [currentIndex,setCurrentIndex] = useState(0);
    const [key,setKey] = useState(0);

    const handleNext = () =>{
        if(currentIndex < questions.length - 1){
            setCurrentIndex(currentIndex + 1);
            setKey(prev => prev +1)
        }
    }
    const handlePrev = () =>{
        if(currentIndex > 0){
            setCurrentIndex(currentIndex - 1);
            setKey(prev => prev +1)
        }
    }
    const handleShuffle = ()=>{
      const shuffled=[...cards].sort(() => Math.random() - 0.5);
      setCards(shuffled);
      const randomIndex= Math.floor(Math.random() * shuffled.length);
      setCurrentIndex(randomIndex);
      setKey(prev => prev+2);
    };

  return (
    <div className='App'>
        <Flashcard
        key={key}
        question={questions[currentIndex]} 
        currentIndex={currentIndex}
        total={questions.length}
        onNext={handleNext}
        onPrev={handlePrev}
        onShuffle={handleShuffle}
      />
    </div>
  )
}
export default App;

