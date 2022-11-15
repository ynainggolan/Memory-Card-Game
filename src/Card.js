import React from 'react';
import "./Card.css"
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isFlipped: false}
  }

  handleClick = () => {
    this.setState(state => ({isFlipped: !state.isFlipped}));
    this.props.handleChoice(this.props.cardText)
  }
  
  render() {
    if(this.state.isFlipped === false) {
      return (
        <div className="back" 
             onClick={this.handleClick} >{this.props.cardText.item}</div>
      );
		}
    return (
      <div className="front" onClick={this.handleClick}>{this.props.cardText.item}</div>
    );
  }
}

export default Card;