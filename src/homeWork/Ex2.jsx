import React, { useState } from "react";

const Ex2 = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hidden" : "Show"}</button>
      {show && <h1>MindX - Technology School</h1>}
    </div>
  );
};

export default Ex2;
