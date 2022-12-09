import './App.css';
import Card from './Card'
import { useState, useEffect } from 'react'

const cardValues = [
    {"item":"Hello", matched: false},
    {"item":"Goodbye", matched: false},
    {"item":"Maybe", matched: false},
    {"item":"Hey", matched: false},
    {"item":"What", matched: false}, 
    {"item":"Why", matched: false},
    {"item":"How", matched: false},
    {"item":"When", matched: false}

]

function App(){
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [win, setWin] = useState(0)

    //shuffle cards
    const shuffleCards =() =>{
        const shuffleCards = [...cardValues, ...cardValues].sort(() => Math.random() - 0.5).map((card) =>({...card, id:Math.random()}) )

        setCards(shuffleCards)
        setTurns(0)
        setWin(0)

    }

    // handle a choice
    const handleChoice = (card) =>{
       choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    //compares 2 selected card
    useEffect(() => {
        if (choiceOne && choiceTwo){
            setDisabled(true)
            if(choiceOne.item === choiceTwo.item){
                setWin(prevWin => prevWin +1)
                //console.log('Those Card does match')
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.item === choiceOne.item) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            }else{
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [choiceOne, choiceTwo])
    //console.log(cards)

    // reset choices & increase turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    if(win === cardValues.length){
        alert("Congrats You Won!")
    }

    return(
        <div className="App">
            <button onClick={shuffleCards}>New Game</button>
            <div className="card-grid">
                {cards.map((card)=>(
                <Card key={card.id} 
                cardText={card} 
                handleChoice={handleChoice}
                flipped={card === choiceOne || card === choiceTwo || card.matched}
                disabled={disabled}
                />))}
            </div>
            <p>Turns: {turns}</p>
        </div>
    );
}

export default App;