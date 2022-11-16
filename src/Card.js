import React from 'react';
import "./Card.css"
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isFlipped: false}
  }

  handleClick = () => {
    if(!this.props.disabled){
      this.setState(state => ({isFlipped: !state.isFlipped}));
      this.props.handleChoice(this.props.cardText)
    }
  }


  render() {
    if(!this.props.flipped) {
      //It's a Feature not a bug. (handy during testing and playing)
        return (
          <div className= "back"
               onClick={this.handleClick} >
                {this.props.cardText.item}              
                </div>
       );
		}return (
      <div className= "front">
            {this.props.cardText.item}              
            </div>
    );  

  }
}

export default Card;