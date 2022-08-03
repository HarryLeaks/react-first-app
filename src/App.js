import './App.css'
import React, {useState} from "react";

function App(){
  const myStyle = {
    color: "red"
  }

  const [count, setCount] = useState(0)

  const myAge = 20;
  console.log(myAge);

  return (
    <div className="app">
      <h2 style={{color: 'red'}}>{myAge}</h2>
      <h2 style={myStyle}>Hello</h2>

      <h1 style={myStyle}>My Count is {count}</h1>
      <button onClick={()=>setCount(count+1)}>Add Count</button>
    </div>
  );
}

export default App