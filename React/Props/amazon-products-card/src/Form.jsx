import React from "react";

function handleForm(event) {
  event.preventDefault();
  alert("Form Submitted!!");
}

function App() {
  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Write Something"
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;