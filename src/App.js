import './App.css';
// import Header from './Movies/Header';
// import Movies from './Movies/Movies';
// import Props from './Movies/Movie.json'
// import { useState } from "react";
import UseStateHook from './Hook/Use-State';
import Header from './Hook/Header';

/*function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        {
          Props.map((elements,index) => {
            return (
              <Movies
                key= {index}
                title={elements.Title}
                year={elements.Year}
                runtime={elements.Runtime}
                img={elements.Poster}
              />
            )
          })
        }
      </div>
    </div>
  );
}*/

// =============Movies End============

// =============Hook Start============

/*
function App() {
  const [num, setNum] = useState(1);

  function incre() {

    setNum(num + 1);
  }
  function dicre() {
    if (num === 1) {

      setNum(1);
      return
    }
    setNum(num - 1);
  }
  return (<>
    <div>
      <h1 className='hookHeader'>Hook Practice</h1>
      <h1 className='hook-num'> {num}</h1>
      <div className='hook-main'>

        <button onClick={incre} className='btn'>
          Incriment
        </button>
        <button onClick={dicre} className='btn'>
          Decrement
        </button>
      </div>
    </div>
  </>);

}*/
// =============Hook Project Start============


function App() {
  return (
    <>
      <Header />
      <UseStateHook />
    </>
  )
}
export default App;
