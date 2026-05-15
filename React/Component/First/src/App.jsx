import React from "react";
import StudentCart from "./componets/StudentCart";
import Navbar from "./componets/Navbar";
import Agecheker from "./componets/Agecheker";
import AddCss from "./componets/AddCss";

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
      <Agecheker/>
      <AddCss/>
    </>
  );
}

export default App;