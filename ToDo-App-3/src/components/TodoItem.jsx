import React from "react";

import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <>
      <div className="container text-center">
        <div className="row pt-5">
          <div className="col-md-4 text-center">{todoName}</div>
          <div className="col-md-4 ">
            <div className="col-md-4 text-center">{todoDate}</div>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-danger"
              onClick={() => onDeleteClick(todoName)}
            >
              Delete <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
