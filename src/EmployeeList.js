import React, { Component } from "react";
import Location from "./Location";

export default class EmployeeList extends Component {
  state = {
    employees: [
      { name: "Jessica Younker" },
      { name: "Jordan Nelson" },
      { name: "Zoe LeBlanc" },
      { name: "Blaise Roberts" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.employees.map(employee => <li>{employee.name}</li>)}
        </ul>
      </React.Fragment>
    );
  }
}
