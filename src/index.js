import React from "react";
import ReactDom from "react-dom";

// const App = () => {
//   // return null;
//   // return <h1>こんにちは！</h1>;
//   // return ( // JSX記法のルール：returnは一つのタグ要素しか返してはならない
//   //   <div> //なので、<div></div>で囲ってやる必要がある
//   //     <h1>こんにちは！</h1>
//   //     <p>お元気ですか？</p>
//   //   </div>
//   // );
//   // return (
//   //   // 不要な<div></div>で囲うよりも<React.Fragment>で囲うのが良い
//   //   <React.Fragment>
//   //     <h1>こんにちは！</h1>
//   //     <p>お元気ですか？</p>
//   //   </React.Fragment>
//   // );
//   return (
//     // 今は<React.Fragment>が進化して<>だけで良くなった
//     <>
//       <h1>こんにちは！</h1>
//       <p>お元気ですか？</p>
//     </>
//   );
// };
import App from "./App.jsx";

ReactDom.render(<App />, document.getElementById("root"));
