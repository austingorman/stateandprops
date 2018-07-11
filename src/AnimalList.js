import React, { Component } from "react";

export default class AnimalList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.animals.map(animal => <div>{animal.name}</div>)}
      </React.Fragment>
    );
  }
}