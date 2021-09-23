import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>コンにちは</h1>
      <p>おでんきですか?</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
