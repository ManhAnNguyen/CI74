import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { useState } from "react";
import Text from "./components/Text";

function App() {
  const [text, zText] = useState("Mindx 18+");

  const handleState = () => {
    for (let i = 0; i <= 6; i++) {
      zText(i);
    }
  };

  console.log(text);

  return (
    <>
      <Button
        text="Change to Mindx Teens"
        color="green"
        onClick={handleState}
      />
      <Text text={text} />
    </>
  );
}

export default App;

//state làm cho component re-render
