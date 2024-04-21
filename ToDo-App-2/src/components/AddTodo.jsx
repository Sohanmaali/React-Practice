let AddTodo = () => {
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
              />
            </div>
          </div>
          <div className="col-md-4">
            <button className="btn btn-warning">Add</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
