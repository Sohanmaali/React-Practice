import { useState } from "react";

let AddTodo = ({ onNewItem }) => {
  const [todoName, setToDoName] = useState();
  const [todoDate, setToDoDate] = useState();

  const handleNameChange = (event) => {
    setToDoName(event.target.value);
    console.log(event.target.value);
  };
  const handleDateChange = (event) => {
    setToDoDate(event.target.value);
  };
  const handleAddButton = () => {
    onNewItem(todoName, todoDate);
    setToDoName();
    setToDoDate();
  };
  return (
    <>
      <div className="container text-center">
        <div className="row pt-5">
          <div className="col-md-4 ">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Enter Todo Here"
                onChange={handleNameChange}
                value={todoName}
              />
            </div>
          </div>
          <div className="col-md-4 ">
            <div class="input-group mb-3">
              <input
                type="date"
                class="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={handleDateChange}
                value={todoDate}
              />
            </div>
          </div>
          <div className="col-md-4">
            <button className="btn btn-warning" onClick={handleAddButton}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
