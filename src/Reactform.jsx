import { useState } from "react";

function Reactform() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Reactform;
