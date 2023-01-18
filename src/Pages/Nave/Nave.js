import React from "react";
import { Link } from "react-router-dom";

const Nave = () => {
  return (
    <div>
      <Link to="/Login">login</Link>
      <Link to="/regerter">Regester</Link>
    </div>
  );
};

export default Nave;
