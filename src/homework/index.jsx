import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { BsArrowUpSquare } from "react-icons/bs";

const HomeWork = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.target.documentElement.scrollTop > 0) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchTodos = () => {
    setisLoading(true);
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();

      setTodos(data);
      setisLoading(false);
    }, 3000);
  };

  const hanldeScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {todos && todos.map((t, index) => <h4 key={index}>{t.title}</h4>)}
      <button className="button" onClick={fetchTodos}>
        {isLoading ? (
          <RotatingLines height="20" width="20" strokeColor="white" />
        ) : (
          "FETCH DATA"
        )}
      </button>
      {showScroll && (
        <span className="upto-top" onClick={hanldeScrollToTop}>
          <BsArrowUpSquare fontSize={"32px"} color="green" />
        </span>
      )}
    </div>
  );
};

export default HomeWork;
