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

  addNewAnimal = event => {
    // event.preventDefault();
    const name = event.target.animalName.value;
    const breed = event.target.animalBreed.value;

    // const data = new FormData(event.target);
    console.log(name, breed);

    fetch("http://localhost:5002/animals/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        name: name,
        breed: breed
      })
    })
      // When DELETE is finished, retrieve the new list of animals
      .then(() => {
        // Remember you HAVE TO return this fetch to the subsequenet `then()`
        return fetch("http://localhost:5002/animals");
      })
      // Once the new array of animals is retrieved, set the state
      .then(a => a.json())
      .then(animalList => {
        this.setState({ animals: animalList });
      });
  };

  checkOutAnimal = animalId => {
    // Delete the specified animal from the API
    fetch(`http://localhost:5002/animals/${animalId}`, {
      method: "DELETE"
    })
      // When DELETE is finished, retrieve the new list of animals
      .then(() => {
        // Remember you HAVE TO return this fetch to the subsequenet `then()`
        return fetch("http://localhost:5002/animals");
      })
      // Once the new array of animals is retrieved, set the state
      .then(a => a.json())
      .then(animalList => {
        this.setState({ animals: animalList });
      });
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          <form onSubmit={this.addNewAnimal}>
            <label htmlFor="username">Animal Name</label>
            <input id="animalName" name="animalName" type="text" />

            <label htmlFor="birthdate">Animal Breed</label>
            <input id="animalBreed" name="animalBreed" type="text" />

            <button>Submit</button>
          </form>
          {this.state.animals.map(animal => (
            <Animal
              key={animal.id}
              animal={animal}
              checkOutAnimal={this.checkOutAnimal}
            >
              {animal.name}
              {/* {console.log(animal.id, "animal ID")}
              {console.log(animal, "animal")}
              {console.log(animal.name, "animal name")} */}
            </Animal>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
