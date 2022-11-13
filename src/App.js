import './App.css';
import Card from './Card'
import { useState } from 'react'

const cardValues = [
    "Hello", "Goodbye", "Maybe",
     "Hey", "What", "Why", "How"
]

function App(){
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState([])
    //shuffle cards
    const shuffleCards =() =>{
        //const shuffleCards = [...cardValues, ...cardValues].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id:Math.random()}))
        const shuffleCards = [...cardValues, ...cardValues].sort(() => Math.random() - 0.5)

        setCards(shuffleCards)
        setTurns(0)
    }
   
    console.log(cards, turns)
/*<div className="card-grid">
            {cardValues.map((item,idx)=>(<Card key={idx} cardText={item}/>))}
            </div>
            {cards.map(card => (<Card key={card.id} card={card}/>))}*/ 
    return(
        <div className="App">
            <button onClick={shuffleCards}>New Game</button>
        <div className="card-grid">
            {cards.map((item,idx)=>(<Card key={idx} cardText={item}/>))}
        </div>
            
        </div>
    );
}

export default App;