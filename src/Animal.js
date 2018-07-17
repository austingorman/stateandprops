import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Animal = ({ animal, children, checkOutAnimal }) => {
  return (
    <div className="card" style={{ width: `18rem` }}>
      <div className="card-body">
        <h5 className="card-title">{children}</h5>
        <p className="card-text">{animal.breed}</p>

        {
          <Link
            className="card-link"
            to={{
              pathname: `/animals/${animal.id}`,
              state: { animal: animal }
            }}
          >
            Details
          </Link>
        }
        <a href="##" onClick={() => checkOutAnimal(animal.id)}>
          Delete
        </a>
      </div>
    </div>
  );
};

Animal.propTypes = {
  animal: PropTypes.object
  // foo: PropTypes.string.isRequired
};

export default Animal;
// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default props => {
//   return (
//     <div className="card" style={{ width: `18rem` }}>
//       <div className="card-body">
//         <h5 className="card-title">{props.animal.name}</h5>
//         <p className="card-text">{props.animal.breed}</p>

//         {
//           <Link
//             className="card-link"
//             to={{
//               pathname: `/animals/${props.animal.id}`,
//               state: { animal: props.animal }
//             }}
//           >
//             Details
//           </Link>
//         }
//         <a href="##" onClick={() => props.checkOutAnimal(props.animal.id)}>
//           Delete
//         </a>
//       </div>
//     </div>
//   );
// };
