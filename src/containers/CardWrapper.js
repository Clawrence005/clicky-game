import React from 'react';
import Card from "../components/Card";

class CardWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'hi',
      wasClicked: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleClick(event) {
    alert('This was clicked' + this.state.value);
    event.preventDefault();
    this.setState(state => ({ wasClicked: true }));
  }


  render() {
    return (
      <Card />
    );
  }
}

export default CardWrapper;