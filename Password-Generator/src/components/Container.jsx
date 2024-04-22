import React from "react";

const Container = (props) => {
  return (
    <>
      <div className="container">
        <div className="row col-md-9 ">
          <div className="pt-5 ">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center">Password Generator</h3>
              </div>
              <div className="card-body">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
