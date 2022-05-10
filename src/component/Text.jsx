import React, { useEffect } from "react";

const Text = () => {
  useEffect(() => {
    console.log("render when enter the domn");

    return () => {
      console.log("render when remove ");
    };
  }, []);
  return <div>Text</div>;
};

export default Text;
