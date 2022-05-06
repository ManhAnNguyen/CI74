import React, { useState } from "react";
import Todo from "../components/Todo";

const data = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
  {
    userId: 1,
    id: 11,
    title: "vero rerum temporibus dolor",
    completed: true,
  },
  {
    userId: 1,
    id: 12,
    title: "ipsa repellendus fugit nisi",
    completed: true,
  },
  {
    userId: 1,
    id: 13,
    title: "et doloremque nulla",
    completed: false,
  },
  {
    userId: 1,
    id: 14,
    title: "repellendus sunt dolores architecto voluptatum",
    completed: true,
  },
  {
    userId: 1,
    id: 15,
    title: "ab voluptatum amet voluptas",
    completed: true,
  },
];

const Ex1 = () => {
  const [todos, setTodos] = useState(data);

  const handleCompleted = () => {
    setTodos(data.filter((t) => t.completed === true));
  };

  const handleNotCompleted = () => {
    setTodos(data.filter((t) => t.completed === false));
  };
  const handleShowAll = () => {
    setTodos(data);
  };

  const handleDelete = (id) => {
    setTodos(data.filter((d) => d.id !== id));
  };
  return (
    <div>
      {todos.map((a, index) => (
        <Todo
          name={a.title}
          status={a.completed}
          order={a.id}
          key={index}
          handleDelete={handleDelete}
          id={a.id}
        />
      ))}
      <button onClick={handleCompleted}>Completed</button>
      <button onClick={handleNotCompleted}>Not Completed</button>
      <button onClick={handleShowAll}>All</button>
    </div>
  );
};

export default Ex1;
