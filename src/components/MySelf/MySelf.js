import React from "react";
import Special from "../Special/Special";

const MySelf = ({ house }) => {
  return (
    <div>
      <h3>MySelf</h3>
      <p>
        <small>House: {house}</small>
      </p>
      <section>
        <Special />
      </section>
    </div>
  );
};

export default MySelf;
