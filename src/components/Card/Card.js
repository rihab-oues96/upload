import React from "react";
import "../Card/Card.scss";

const Card = ({ imageCard, type, progression, usedSpace, Colorclass }) => {
  return (
    <div className="card">
      <div className={`back-img ${Colorclass}`}>
        <img src={imageCard} alt="home" className="img" />
      </div>

      <label className="doc">{type}</label>

      <div className="progress">
        <div className="myProgress">
          <div className={`myBar ${Colorclass}`}></div>
        </div>
        <label className="num-data">
          <label className="prog-val">{progression}%</label>
          <label className="size-data">{usedSpace} gb used from 80gb</label>
        </label>
      </div>
    </div>
  );
};

export default Card;
