import React, { useState } from "react";
import BMI from '../../assets/bmin.jpg'
import './Bmi.scss'
const Bmi = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
  return (
    <div className="bmi">
      <div className="container">
      <h1>BMI Calculator</h1>
      <img src={BMI} alt="" />
    <div className="card">

      <input
        type="text"
        onChange={(e) => setHeight(e.target.value)}
        placeholder="height in cm"
      />
      <input
        type="text"
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight in kg"
      />
      <button onClick={handleBmi}>Calculate</button>
      <h1 className="head">{bmi}</h1>
      <h2>{info}</h2>
    </div>
      
      </div>
    </div>
  );
};

export default Bmi;