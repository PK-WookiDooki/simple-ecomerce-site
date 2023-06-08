import React from "react";

const PMInput = ({ type, placeholder, icon, error, value, handleChange }) => {
  return (
    <div className="mb-3">
      <div
        className={`h-10 w-full flex items-center border rounded-sm ${
          error ? "border-red-500" : "border-background"
        } `}
      >
        <input
          value={value ? value : ""}
          onChange={handleChange}
          type={type ? type : "text"}
          placeholder={placeholder}
          className={`h-full w-full outline-none px-2 placeholder:capitalize placeholder:text-gray-500 ${
            error ? "text-red-500 placeholder:text-red-500" : ""
          } `}
        />
        {icon ? icon : ""}
      </div>
      {error && <p className="text-sm mt-1 text-red-500"> {error} </p>}
    </div>
  );
};

export default PMInput;
