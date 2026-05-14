import React from "react";

function StudentCart(props) {
  return (
    <>
      <h2>Name : {props.name}</h2>
      <p>College : {props.college}</p>
      <p>Course : {props.course}</p>
    </>
  );
}

export default StudentCart;