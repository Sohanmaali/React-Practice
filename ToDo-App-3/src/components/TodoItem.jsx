import React from "react";

function TodoItem({ todoName, todoDate }) {
  return (
    <>
      <div className="container text-center">
        <div className="row pt-5">
          <div className="col-md-4 text-center">{todoName}</div>
          <div className="col-md-4 ">
            <div className="col-md-4 text-center">{todoDate}</div>
          </div>
          <div className="col-md-4">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
