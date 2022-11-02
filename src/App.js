//import logo from './logo.svg';
import './App.css';
import Card from './Card'

function App(){
    const cardValues = ["Hello", "Goodbye", "Maybe", "Hey", "Hello", "Goodbye", "Maybe", "Hey", "What", "Why", "How", "What", "Why", "How"]
    return(
        <div className="App">
            {cardValues.map((item,idx)=>(<Card key={idx} cardText={item}/>))}
        </div>
    );
}

export default App;