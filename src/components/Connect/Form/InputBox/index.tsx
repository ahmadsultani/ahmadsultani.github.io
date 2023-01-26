import React from "react";

export default function InputBox({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-2 text-gray-300">
      <label htmlFor="input" className="text-[18px]">{label}</label>
      <input type="text" className="bg-transparent outline-none border-b-2 text-[14px] border-gray-600"/>
    </div>
  );
}
