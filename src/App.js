import './App.css';
import Card from './Card'
import { useState } from 'react'

const cardValues = [
    {"item":"Hello"},
    {"item":"Goodbye"},
    {"item":"Maybe"},
    {"item":"Hey"},
    {"item":"What"}, 
    {"item":"Why"},
    {"item":"How"}
]

function App(){
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    //shuffle cards
    const shuffleCards =() =>{
        //const shuffleCards = [...cardValues, ...cardValues].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id:Math.random()}))
        const shuffleCards = [...cardValues, ...cardValues].sort(() => Math.random() - 0.5).map((card) =>({...card, id:Math.random()}) )

        setCards(shuffleCards)
        setTurns(0)

    }
    console.log(cards)
    // handle a choice

    const handleChoice = (card) =>{
       choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    /*<div className="card-grid">
            {cardValues.map((item,idx)=>(<Card key={idx} cardText={item}/>))}
            </div>
            {cards.map(card => (<Card key={card.id} card={card}/>))}*/ 
    return(
        <div className="App">
            <button onClick={shuffleCards}>New Game</button>
        <div className="card-grid">
            {cards.map((card)=>(<Card key={card.id} cardText={card} handleChoice={handleChoice}/>))}
        </div>
            
        </div>
    );
}

export default App;