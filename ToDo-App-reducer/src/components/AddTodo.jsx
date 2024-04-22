import { useContext } from "react";
import { useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import todoItemsContext from "../store/ToDoItemStore";

let AddTodo = () => {
  const { addNewItem } = useContext(todoItemsContext);
  const todoNameElement = useRef("");
  const todoDateElement = useRef("");

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    addNewItem(todoName, todoDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };
  return (
    <>
      <form action="" onSubmit={handleAddButton}>
        <div className="container text-center">
          <div className="row pt-5">
            <div className="col-md-4 ">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Enter Todo Here"
                  ref={todoNameElement}
                  // value={todoNameElement.current.value}
                />
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="input-group mb-3">
                <input
                  type="date"
                  className="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  ref={todoDateElement}
                />
              </div>
            </div>
            <div className="col-md-4">
              <button className="btn btn-warning">
                Add <IoIosAddCircleOutline />
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
