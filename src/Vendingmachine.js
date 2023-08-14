import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

function Vendingmachine() {
  return (
    <div className="Vendingmachine">
      <Message>
        <h1>HELLO I AM VEDNING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
      </Message>
      <Message>
        <h1>
          <Link to="/soda">soda</Link>
        </h1>
        <h1>
          <Link to="/chips">chips</Link>
        </h1>
        <h1>
          <Link to="/candies">candies</Link>
        </h1>
      </Message>
    </div>
  );
}

export default Vendingmachine;
