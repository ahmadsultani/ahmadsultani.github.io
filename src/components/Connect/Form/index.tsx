import React from "react";
import InputBox from "./InputBox";

export default function Form() {
  const inputs = ["Enter your name", "Your email address", "Subject"];
  return (
    <div className="flex flex-grow flex-col gap-8 bg-gray-800 rounded-xl md:rounded-3xl w-full p-5 md:p-12">
      {inputs.map((input, index) => (
        <InputBox key={index} label={input} />
      ))}
      <div className="flex flex-col gap-2 text-gray-300">
        <label htmlFor="input" className="text-[18px]">
          Write me a message
        </label>
        <textarea className="bg-transparent outline-none min-h-[5.6rem] border-b-2 text-[14px] border-gray-600" />
      </div>
      <button className="border-2 text-md text-gray-300 mt-4 px-6 py-2 self-end rounded-lg">
        Send!
      </button>
    </div>
  );
}
