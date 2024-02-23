let Buttons = () => {
     let buttons = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];
     return (<>
          <div className="">
               {buttons.map((btn) => {

                    return <button className="btn btn-info" key={btn}>{btn}</button>
               })}
          </div>
     </>);
}
export default Buttons;