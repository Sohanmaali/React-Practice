
let Items = ({ name = "sohan", date = "date" }) => {
     return (<>
          <div className="container">
               <div className="row mt-3 ms-5">
                    <div className="col-md-3">{name}</div>
                    <div className="col-md-3">{date}</div>
                    <div className="col-md-3 ms-4"><button className="btn btn-danger">Delete</button></div>
               </div>
          </div>
     </>);
}
export default Items;
