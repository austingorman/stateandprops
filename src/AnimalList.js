import React, { Component } from "react";
import Animal from "./Animal";
import APIManager from "./APIManager";

export default class AnimalList extends Component {
  state = { animals: [] };

  componentDidMount() {
    APIManager.getAnimals().then(animals =>
      this.setState({
        animals: animals
      })
    );
  }
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.animals.map(animal => (
            <Animal key={animal.id} animal={animal}>
              {animal.name}
            </Animal>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
