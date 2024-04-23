import React from "react";

const LodingSpinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "5rem", height: "5rem" }}
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default LodingSpinner;
