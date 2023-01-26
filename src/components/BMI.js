import React, { useState } from "react";

const BMI = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      // Logic for message

      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  //  show image based on bmi calculation
  let imgSource;

  if (bmi < 1) {
    imgSource = null;
  } else {
    if (bmi < 25) {
      imgSource = require("../components/assets/Underweight.png");
    } else if (bmi >= 25 && bmi < 30) {
      imgSource = require("../components/assets/Healthy.png");
    } else {
      imgSource = require("../components/assets/Overweight.png");
    }
  }

  let reload = () => {
    window.location.reload();
  };

  return (
    // GLOBAL CONTAINER
    <div className="flex items-center justify-center min-h-screen bg-[#0a192f]">
      {/* CARD CONTAINER */}
      <div className="relative flex flex-col m-6 space-y-10 overflow-hidden bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        {/* LEFT SIDE */}
        <div className="p-6 md:p-20">
          <h1 className="mb-5 text-4xl font-bold">BMI Calculator</h1>
          <form onSubmit={calcBmi}>
            <div className="flex flex-col py-2 ">
              <label className="font-bold mb-2">Weight (lbs)</label>
              <input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="border border-gray-700 p-1 rounded-xl text-xl pl-3"
              />
            </div>
            <div className="flex flex-col py-2 ">
              <label className="font-bold mb-2">Height (in)</label>
              <input
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="border  border-gray-700 p-1 rounded-xl text-xl pl-3"
              />
            </div>
            <div className="flex mt-5 gap-16">
              <button className="btn">Submit</button>
              <button className="btn" onClick={reload}>
                Reload
              </button>
            </div>
          </form>
        </div>
        {/* RIGHT SIDE */}
        <div className="p-6 md:p-20 border border-l-gray-300 ">
          <div className="text-center  font-bold">
            <h2 className="text-2xl mb-2">Your Bmi is {bmi}</h2>
            <p>{message}</p>
          </div>
          <div className="items-center ">
            <img src={imgSource} className="m-auto h-[250px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMI;
