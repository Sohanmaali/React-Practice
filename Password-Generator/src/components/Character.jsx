import React from "react";

const Character = ({ charAllow, checkChar }) => {
  return (
    <>
      <input
        type="checkbox"
        className="me-4 "
        aria-describedby="basic-addon1"
        defaultChecked={charAllow}
        onChange={checkChar}
        id="char"
      />
      <label className="fs-5" id="char">
        Char
      </label>
    </>
  );
};

export default Character;
