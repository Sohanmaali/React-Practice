import AppName from './Component/AppName'
import AddToDo from './Component/AddToDo'
import Items from './Component/Items'
// import MapPractice from './Component/Map'
import './App.css'

function App() {
  let data = [{ name: "Sohan", date: "08/12/2024" }, { name: "Rohan", date: "08/12/2024" }];
  return (
    <>
      <AppName />
      <AddToDo />
      {data.map((item) => {
        return <Items name={item.name} date={item.date} key={item} />
      })}

      {/* <MapPractice /> */}
    </>
  )
}

export default App
