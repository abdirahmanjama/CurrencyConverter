import React from "react";

interface Props {
  placeholder: string;
  value: string;
  label: string;
}

function Input({ placeholder, value, label }: Props) {
  return (
    <div className="flex-1">
      <label className="font-bold text-sm mb-3 block" htmlFor="text">
        {label}
      </label>
      <input
        type="text"
        className="focus:outline-none focus:ring-green-500 
        focus:border-green-500 
        w-full rounded-sm min-h-50 pl-3 pr-10 py-3 border-2"
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
