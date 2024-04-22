import React from "react";

const Number = ({ numberAllow, checkNumber }) => {
  return (
    <>
      <input
        type="checkbox"
        className="me-4 fs-5 "
        aria-describedby="basic-addon1"
        defaultChecked={numberAllow}
        onChange={checkNumber}
      />
      <span className="me-5 fs-5"> Number</span>
    </>
  );
};

export default Number;
