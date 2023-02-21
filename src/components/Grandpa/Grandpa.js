import React from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

const Grandpa = () => {
  const house = 7;
  return (
    <div className="grandpa">
      <h3>Grandpa</h3>
      <section className="flex">
        <Father house={house} />
        <Uncle house={house} />
        <Aunty house={house} />
      </section>
    </div>
  );
};

export default Grandpa;
