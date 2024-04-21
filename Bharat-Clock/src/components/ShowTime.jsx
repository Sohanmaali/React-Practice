import React from "react";

let ShowTime = () => {
  let datetime = new Date();

  return (
    <>
      <div className="text-center fs-2">
        This is the current time : {datetime.toLocaleDateString()} -{" "}
        {datetime.toLocaleTimeString()}
      </div>
    </>
  );
};

export default ShowTime;
