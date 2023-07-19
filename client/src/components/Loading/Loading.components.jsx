import React from "react";
import "./Loading.styles.css";
import loading from "../../assets/JigglyEnojado.gif";

function Loading() {
  return (
    <div className="container">
      <img className="loading-img" src={loading} />
      <p className="loading-text">Loading</p>
    </div>
  );
}

export default Loading;
