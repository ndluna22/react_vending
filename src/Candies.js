import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

function Candies() {
  return (
    <div className="Candies">
      <Message>
        <h1>Candy Time! </h1>
        <h1>
          <Link to="/">Go Back</Link>
        </h1>
      </Message>
    </div>
  );
}

export default Candies;
