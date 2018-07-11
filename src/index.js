import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import LocationList from "./LocationList";
import ReactDOM from "react-dom";

export default class Kennel extends Component {
  state = {
    employees: [
      { name: "Jessica Younker" },
      { name: "Jordan Nelson" },
      { name: "Zoe LeBlanc" },
      { name: "Blaise Roberts" }
    ],
    locations: [{ name: "Nashville North" }, { name: "Nashville South" }]
  };

  render() {
    return (
      <React.Fragment>
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Kennel />, document.querySelector("#root"));
