/* eslint-disable */
import React, { useState } from "react";
import "./app.css";
import List from "./components/list";

function App() {
  let [title, setTitle] = useState([
    { title: "제목1", count: 1 },
    { title: "파이썬", count: 1 },
    { title: "자바", count: 1 },
  ]);
  let [btn, setBtn] = useState(0);

  let [modal, setModal] = useState(false);
  let [inputVal, setInputVal] = useState("");

  const handleClick = (idx) => {
    let newCount = [...title];
    // let index = newCount.indexOf(item);
    newCount[idx].count = newCount[idx].count + 1;
    setTitle(newCount);
  };
  // const changeTitle = () => {
  //   //하드코딩할때
  //   // setTitle(["여자코트", "제목2", "제목3"]);
  //   //원본데이터는 절대 수정하면 안됨! 변경하고싶을때 복사본생성!
  //   // title[0] = "여자코트"
  //   //spread연산자 사용할 때
  //   let newTitle = [...title];
  //   newTitle[0] = "여자코트추천";
  //   setTitle(newTitle);
  // };
  const changeSort = () => {
    let sortTitle = [...title];
    sortTitle = sortTitle.sort();
    setTitle(sortTitle);
  };

  const clickModal = () => {
    if (modal == false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    let newArray = [...title];
    let sample = {};
    sample.title = inputVal;
    sample.count = 1;
    newArray.push(sample);
    setTitle(newArray);
    document.querySelector("input").value = "";
  };

  return (
    <div className="App">
      <div className="navContainer">
        <div>블로그</div>
      </div>
      <button onClick={changeSort}>정렬</button>
      {/* <div className="list">
        <h3>{title[0]}</h3>
        <button onClick={changeTitle}>버튼</button>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div> */}
      {/* <List></List> */}
      <List
        title={title}
        btn={btn}
        setBtn={setBtn}
        handleClick={handleClick}
      ></List>

      <form>
        <div className="publish">
          <input
            className="input"
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
          />
          <button onClick={clickSubmit}>저장</button>
        </div>
      </form>

      {/* <input
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      ></input> */}

      <button onClick={clickModal}>모달버튼</button>

      {/* <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        모달버튼
      </button> */}
      {modal == true ? <Modal title={title} btn={btn}></Modal> : null}
    </div>
  );
}

function Modal(props) {
  console.log(props.btn);
  console.log(props.title);

  return (
    <div className="modal">
      <h2>{props.title[props.btn].title}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
