import React from "react";

const LodingSpinner = () => {
  return (
    <>
      <div class="d-flex justify-content-center">
        <div
          class="spinner-border"
          role="status"
          style={{ width: "5rem", height: "5rem" }}
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default LodingSpinner;
