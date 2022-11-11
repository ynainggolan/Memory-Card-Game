//import logo from './logo.svg';
import './App.css';
import Card from './Card'

function App(){
    const cardValues = ["Hello", "Goodbye", "Maybe", "Hey", 
    "Hello", "Goodbye", "Maybe", "Hey", "What", "Why", "How", 
    "What", "Why", "How"]
    const newGame= <button onclick="newGame()">New Game</button>;
    <button>New Game</button>
    return(
        <div className="App">
            <button>New Game</button>

            <div className="card-grid">
            {cardValues.map((item,idx)=>(<Card key={idx} cardText={item}/>))}
            </div>
            
        </div>
    );
}

export default App;