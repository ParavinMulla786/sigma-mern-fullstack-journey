import React from "react";
import StudentCart from "./componets/StudentCart";
import Navbar from "./componets/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <StudentCart
        name="Paravin"
        college="NMCOE"
        course="BTech"
      />

      <StudentCart
        name="Vedantika"
        college="NMCOE"
        course="BTech"
      />

      <StudentCart
        name="Divya"
        college="NMCOE"
        course="BTech"
      />
    </>
  );
}

export default App;