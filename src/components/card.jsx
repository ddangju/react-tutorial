import React from "react";

const Card = (props) => {
  // console.log(props.item.title);
  console.log(props.setBtn);

  return (
    <div>
      <div className="list" key={props.idx}>
        <h3 onClick={() => props.setBtn(props.idx)}>{props.item.title}</h3>
        <span onClick={() => props.handleClick(props.idx)}>🦔</span>
        {props.item.count}
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
};

export default Card;
