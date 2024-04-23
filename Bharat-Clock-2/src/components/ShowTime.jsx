import React from "react";
import { useEffect } from "react";
import { useState } from "react";

let ShowTime = () => {
  // let datetime = new Date();
  const [datetime, setdateTime] = useState(new Date());
  useEffect(() => {
    const intervaId = setInterval(() => {
      setdateTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervaId);
    };
  }, []);
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
