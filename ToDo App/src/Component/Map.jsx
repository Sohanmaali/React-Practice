import "bootstrap/dist/css/bootstrap.min.css"
let MapPractice = () => {
     let foodList = ["Dal", "chawal", "Milk", "roti"];
     return (<>

          <ul className="list-group">
               {foodList.map((item) => {
                    return <li className="list-item" key={item}>{item}</li>
               })}
          </ul>
     </>
     );
}
export default MapPractice;