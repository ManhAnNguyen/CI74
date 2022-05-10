import { useState, useEffect } from "react";
import Text from "./component/Text";

const App = () => {
  const [count, setCount] = useState(1);
  const [person, setPerson] = useState({});
  const [hidden, setHidden] = useState(false);

  const [product, setProduct] = useState(null); //inital product : null ; success : dataRes

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://fakestoreapi.com/products");

    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const dataRes = await data.json();
      setProduct(dataRes);
    } catch (err) {
      console.log("err", err.message);
    }
  };

  console.log(product);

  // useEffect(() => {
  //   console.log("Render");
  //   setCount(count);
  //   //setCount(count + 1)
  // }, [count]);

  // prevCount !== currentCount ->> useEFFECT
  // prevCount === currentCount ->> k chay useEFFECT

  // [] : array dependencies

  // useEffect(() => {
  //   console.log("render");
  // }, [person]);
  return (
    <div>
      {/* <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>INCREASE</button>
      <button onClick={() => setPerson({})}>Set Person</button> */}
      <button onClick={() => setHidden(!hidden)}>
        {hidden ? "Show" : "Hidden"}
      </button>
      {hidden ? null : <Text />}
    </div>
  );
};

export default App;

// mạnh an ->> có deadline , có trận seagame VN and Ukraine;

//pa1 : seagame : 12h -> 4:00 AM ---> deadline --> 2hours  ---> total : 6hours;
//pa2 : seagame : 4 hours and deadline : 2 hours  --> 4 hours
//ba cách xử lý bất đồng bộ : callback,promises,es6 : async await
