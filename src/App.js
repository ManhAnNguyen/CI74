import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { ImHome } from "react-icons/im";
import { MdHomeMini } from "react-icons/md";
import Item from "./components/Item";

const inititalValue = {
  name: "",
  amount: "",
  date: "",
};

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [newItem, setNewItem] = useState(inititalValue);
  const { name, amount, date } = newItem;

  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount || !date) {
      alert("Please full fill !!");
      return;
    }

    setData([...data, { ...newItem, id: new Date() }]);

    setNewItem(inititalValue);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setData(data.filter((d) => d.id !== id));
    // console.log(id);
  };

  // console.log(data);

  return (
    <>
      <span className="icon">
        <ImHome fontSize="40px" color="white" />
      </span>
      <main id="section">
        <div className="add-form">
          {showForm ? (
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <Input
                  placeholder="Enter name here"
                  label="Name"
                  valueInput={name}
                  onChangeInput={(e) =>
                    setNewItem({ ...newItem, name: e.target.value })
                  }
                />
                <Input
                  placeholder="Enter amount here"
                  label="Amount"
                  typeInput="number"
                  valueInput={amount}
                  onChangeInput={(e) =>
                    setNewItem({ ...newItem, amount: e.target.value })
                  }
                />
                <Input
                  placeholder="Date"
                  typeInput="date"
                  label="Date"
                  valueInput={date}
                  onChangeInput={(e) =>
                    setNewItem({ ...newItem, date: e.target.value })
                  }
                />
              </div>

              <div className="button-group">
                <Button colorButton="violet" text="ADD" />
                <Button
                  colorButton="gray"
                  text="CANCEL"
                  onClickButton={() => setShowForm(false)}
                />
              </div>
            </form>
          ) : (
            <Button
              onClickButton={() => setShowForm(true)}
              colorButton={"violet"}
              text="ADD NEW EXPENSE"
            />
          )}
        </div>
        {data.length === 0 ? (
          <h1 style={{ color: "white" }}>0 Item</h1>
        ) : (
          <div className="list-expense">
            <div className="filter"></div>
            <div className="list-group">
              {data.map((d, index) => (
                <Item
                  name={d.name}
                  date={d.date}
                  amount={d.amount}
                  key={index}
                  handleDelete={handleDelete}
                  id={d.id}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
