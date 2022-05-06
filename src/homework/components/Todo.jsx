import React from "react";

const Todo = ({ order, name, status, handleDelete, id }) => {
  return (
    <div className="todo">
      <span className="order" style={{ color: "red" }}>
        {order}
      </span>
      <span className="name" style={{ color: "orange" }}>
        Name : {name}
      </span>
      <span className="status" style={{ color: "green" }}>
        Status : {status === true ? "Done" : "Not Finished"}
      </span>
      <button onClick={() => handleDelete(id)}>DELETE</button>
    </div>
  );
};

export default Todo;
