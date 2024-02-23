function AddToDo() {
  return (
    <>
      <div className="container ">
        <div className="row row-todo text-center">
          <div className="col-md-3 todo-input ">
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="col-md-3 todo-input">
            <input type="date" />
          </div>
          <div className="col-md-2">
            <button type="button td-btn" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddToDo;
