import React, { Component } from "react";
import Animal from "./Animal";

export default class AnimalList extends Component {
  state = {
    animals: [
      { id: 1, name: "Doodles" },
      { id: 2, name: "Jack" },
      { id: 3, name: "Angus" },
      { id: 4, name: "Henley" },
      { id: 5, name: "Derkins" },
      { id: 6, name: "Checkers" }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.animals.map(animal => (
            <Animal key={animal.id} animal={animal} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
