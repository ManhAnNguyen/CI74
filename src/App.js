import React, { useState } from "react";
import Ex1 from "./homework/Ex1";
import Ex2 from "./homework/Ex2";

const App = () => {
  const [value, setValue] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <input
          type="checkbox"
          checked={value}
          onChange={() => setValue(!value)}
        />
        <span>Female</span>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
