/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
// import ColorfulMessage from "./components/ColorfulMessage";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // const onClickButton = () => alert();
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // // Too many re-renderingというエラーが起こる悪い例
  // if (num % 3 === 0) {
  //   setFaceShowFlag(true);
  // } else {
  //   setFaceShowFlag(false);
  // }

  // useEffect(() => {
  //   console.log("useEffect!!");
  // }, []);
  // useEffect(() => {
  //   console.log("useEffect!!");
  // }, [num]);
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "18px"
  // };
  // const contentLadyStyle = {
  //   color: "pink",
  //   fontSize: "18px"
  // };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* <p style={contentStyle}>お元気ですか？</p> */}
      {/* <ColorfulMessage /> */}
      {/* <ColorfulMessage color="blue" message="お元気ですか？" /> */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>

      {/* <p style={contentLadyStyle}>元気です！</p> */}
      {/* <ColorfulMessage color="pink" message="元気です！" /> */}
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>

      {/* <button onClick={onClickButton}>ボタン</button> */}
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* <p>(´･ω･`)</p> */}
      {faceShowFlag && <p>(´･ω･`)</p>}
    </>
  );
};

export default App;
