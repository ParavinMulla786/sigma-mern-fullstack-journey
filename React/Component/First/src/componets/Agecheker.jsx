import React from 'react'
 const age = 20;
function Agecheker(){
  return (
    <div>
        <h2>Student is: </h2>
        <h1>{age >= 16 ? "Adult" : "Minor"}</h1>
    </div>
  );

}

export default Agecheker