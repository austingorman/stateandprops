import React, { Component } from "react";
import Employee from "./Employee";

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
          {this.state.employees.map(employee => (
            <Employee key={employee.id} employee={employee} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
