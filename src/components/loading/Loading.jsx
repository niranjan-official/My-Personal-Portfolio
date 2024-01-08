import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center z-40 fixed">
      <div className="loading z-50"></div>
    </div>
  );
};

export default Loading;
