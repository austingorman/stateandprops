import React, { Component } from "react";

export default class EmployeeList extends Component {
  state = {
    employees: [
      { name: "Jessica Younker" },
      { name: "Jordan Nelson" },
      { name: "Zoe LeBlanc" },
      { name: "Blaise Roberts" }
    ]
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.employees.map(employee =>
            <div>
              {employee.name}
            </div>)
        }
      </React.Fragment>
    );
  }
}
