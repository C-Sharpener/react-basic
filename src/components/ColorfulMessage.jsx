import React from "react";

// const ColorfulMessage = () => {
//   const contentStyle = {
//     color: "blue",
//     fontSize: "18px"
//   };

//   return <p style={contentStyle}>お元気ですか？</p>;
// };

// const ColorfulMessage = (props) => {
export const ColorfulMessage = (props) => {
  // console.log("カラフル");
  const { color, children } = props;
  // console.log(props);
  const contentStyle = {
    // color: props.color,
    // color: color,
    color,
    fontSize: "18px"
  };

  // return <p style={contentStyle}>{props.message}</p>;
  // return <p style={contentStyle}>{props.children}</p>;
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
