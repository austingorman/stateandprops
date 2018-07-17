import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Employee = ({ employee, children }) => {
  return (
    <div className="card" style={{ width: `18rem` }}>
      <div className="card-body">
        <h5 className="card-title">{children}</h5>
        {
          <Link
            className="card-link"
            to={{
              pathname: `/employees/${employee.id}`,
              state: { employee: employee }
            }}
          >
            Details
          </Link>
        }
      </div>
    </div>
  );
};

Employee.propTypes = {
  employee: PropTypes.object,
  foo: PropTypes.string.isRequired
};

export default Employee;

// BEFORE PROPTYPES
// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default props => {
//   return (
//     <div className="card" style={{ width: `18rem` }}>
//       <div className="card-body">
//         <h5 className="card-title">{props.children}</h5>
//           <Link
//             className="card-link"
//             to={{
//               pathname: `/employees/${props.employee.id}`,
//               state: { employee: props.employee }
//             }}
//           >
//             Details
//           </Link>
//         }
//         <a href="##" onClick={() => props.checkOutEmployee(props.employee.id)}>
//           Delete
//         </a>
//       </div>
//     </div>
//   );
// };
