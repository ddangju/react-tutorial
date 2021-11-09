import React, { useState } from "react";
import "./app.css";

function App() {
  let [title, b] = useState(["제목1", "제목2", "제목3"]);
  return (
    <div className="App">
      <div className="navContainer">
        <div>블로그</div>
      </div>
      <div className="list">
        <h3>{title[0]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
