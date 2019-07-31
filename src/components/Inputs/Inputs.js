import React, { Component } from "react";

export default class Inputs extends Component {
  state = {
    animalName: "",
    donation: ""
  };

  collectInputs = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };

  render() {
    return (
      <form>
        <label htmlFor="animal-name" />
        <input type="text" name="animalName" onChange={this.collectInputs} />
        <label htmlFor="donation" />
        <input type="text" name="donation" onChange={this.collectInputs} />
        <button onClick={this.handleSubmit}>Donate!</button>
      </form>
    );
  }
}
