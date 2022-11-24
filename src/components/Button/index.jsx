import React from "react";

export default function Button({ props }) {
  return (
    <button
      type="submit"
      className="w-full text-white bg-secondary hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {props}
    </button>
  );
}
