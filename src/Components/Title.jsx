import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex gap-2 items-center justify-center mb-3 mt-3">
      <p className="text-4xl font-bold mb-6 ">
        {text1} <span className="font-light">{text2}</span>
      </p>
    </div>
  );
};

export default Title;
