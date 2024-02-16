
let Movies = (props) => {
     return (
          <>
               {/* <div className="container main"> */}
               {/* <div className="row bg-info col-md-3 mt-5"> */}
               <div className="movies ">
                    <img src={props.img} alt="" />
                    <p>Movie Name : {props.title}</p>
                    <p>Duration : {props.runtime}</p>
                    <p>Year : {props.year}</p>
               </div>
               {/* </div> */}
               {/* </div> */}
          </>
     );

}
export default Movies;