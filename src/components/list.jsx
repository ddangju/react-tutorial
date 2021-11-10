import React from "react";
import Card from "./card";

const List = (props) => {
  console.log(props.setBtn);

  return (
    <div>
      {props.title.map((item, idx) => (
        // console.log(item);
        // console.log(idx);
        <Card
          item={item}
          idx={idx}
          key={idx}
          btn={props.btn}
          setBtn={props.setBtn}
          handleClick={props.handleClick}
        ></Card>
      ))}
      {/* {props.title.map((item, idx) => (
        <Card
          item={props.item}
          idx={props.idx}
          btn={props.btn}
          handleClick={props.handleClick}
          key={props.idx}
        ></Card>
      ))} */}
    </div>
  );
};

export default List;
