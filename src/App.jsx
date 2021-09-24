import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShow, setFaceShow] = useState(true);

  const OnClickCountUp = () => setNum(num + 1);

  const onclickSwitchShow = () => {
    setFaceShow(!faceShow);
  };

  useEffect(() => {
    console.log("useEffect");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShow || setFaceShow(true);
      } else {
        faceShow && setFaceShow(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>コンにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">電気</ColorfulMessage>
      <button onClick={OnClickCountUp}>カウントアップ</button>
      <button onClick={onclickSwitchShow}>on/off</button>
      <p>{num}</p>
      {faceShow && <p>🔘</p>}
    </>
  );
};

export default App;
