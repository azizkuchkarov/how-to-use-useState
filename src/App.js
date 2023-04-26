import "./App.css";
import { useState } from "react";

const Class = ({ lastName }) => {
  const [age, setAge] = useState(0);
  const [isLogin, setIslogin] = useState(false);

  const heLlo = () => {
    setAge(age + 1);
  };
  const noHello = () => {
    setAge(age - 1);
  };
  const Toggle = () => {
    setIslogin((prevState) => !prevState);
  };
  return (
    <div>
      <h1>hello {lastName}</h1>
      <button className="btn btn-danger" onClick={heLlo}>
        +
      </button>
      <button className="btn btn-warning m-3" onClick={noHello}>
        -
      </button>
      <p className="text-justify-center">{age}</p>
      <div>{isLogin ? <p>Login</p> : null}</div>
      <button className="btn btn-outline-primary" onClick={Toggle}>
        Login
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Class lastName="React" />
      <Class lastName="Native" />
    </div>
  );
}

export default App;
