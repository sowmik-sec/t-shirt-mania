import React, { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

const RingContext = createContext("Brass Ring");

const Grandpa = () => {
  const house = 7;
  const ring = "diamond ring";
  return (
    <div className="grandpa">
      <h3>Grandpa</h3>
      <section className="flex">
        <Father house={house} ring={ring} />
        <Uncle house={house} />
        <Aunty house={house} />
      </section>
    </div>
  );
};

export default Grandpa;
