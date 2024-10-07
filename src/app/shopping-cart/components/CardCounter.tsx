"use client";
import { useState } from "react";

export const CardCounter = () => {
  const [count, setCount] = useState(5);
  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="mt-4 space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full"
          type="button"
        >
          +1
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
          type="button"
        >
          -1
        </button>
      </div>
    </>
  );
};
