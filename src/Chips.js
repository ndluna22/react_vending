import React, { useState } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

function Chips() {
  return (
    <div className="Chips">
      <Message>
        <h1>bags eaten: {bags.length}</h1>
        <h1>
          <Link to="/">Go Back!</Link>
        </h1>
      </Message>
    </div>
  );
}

export default Chips;
