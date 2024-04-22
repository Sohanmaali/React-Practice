import React from "react";

const Range = ({ length, setRange }) => {
  return (
    <>
      <input
        type="range"
        className="me-4"
        aria-describedby="basic-addon1"
        min={6}
        max={40}
        value={length}
        onChange={setRange}
      />
      <label className="me-5 fs-5">Length : {length}</label>
    </>
  );
};

export default Range;
