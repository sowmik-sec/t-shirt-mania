import React from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Father = ({ house }) => {
  return (
    <div>
      <h4>Father</h4>
      <p>
        <small>House: {house}</small>
      </p>
      <section className="flex">
        <MySelf house={house} />
        <Brother house={house} />
        <Sister house={house} />
      </section>
    </div>
  );
};

export default Father;
