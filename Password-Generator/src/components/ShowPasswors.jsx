import React from "react";

const ShowPasswors = ({ password }) => {
  return (
    <>
      <div className="input-group mt-3 mb-5">
        <input
          type="text"
          className="form-control fs-5"
          placeholder="Password"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={password}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary fs-4" type="button">
            Copy
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowPasswors;
