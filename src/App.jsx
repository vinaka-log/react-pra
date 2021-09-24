import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const OnClickButton = () => alert();
  const contentStyle = {
    color: "red",
    fontSize: "24px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>コンにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">電気</ColorfulMessage>
      <button onClick={OnClickButton}>ボタン</button>
    </>
  );
};

export default App;
