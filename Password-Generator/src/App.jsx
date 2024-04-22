import { useState, useCallback, useEffect } from "react";
import ShowPasswors from "./components/ShowPasswors";
import Range from "./components/Range";
import Number from "./components/Number";
import Character from "./components/Character";
import Container from "./components/Container";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [password, setpassword] = useState("");

  const passwordGeneratore = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (charAllow) str += "!@$%^&*()[]{}_+<>?=";

    if (numberAllow) str += "1234567890";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllow, charAllow, setpassword]);

  useEffect(() => {
    passwordGeneratore();
  }, [length, numberAllow, charAllow]);

  const setRange = (e) => {
    setLength(e.target.value);
  };

  const checkNumber = () => {
    setNumberAllow((prev) => !prev);
  };

  const checkChar = () => {
    setcharAllow((prev) => !prev);
  };

  return (
    <>
      <Container>
        <ShowPasswors password={password}></ShowPasswors>

        <div className="text-center">
          <Range length={length} setRange={setRange}></Range>
          <Number numberAllow={numberAllow} checkNumber={checkNumber}></Number>
          <Character charAllow={charAllow} checkChar={checkChar}></Character>
        </div>
      </Container>
    </>
  );
}

export default App;
