"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SearchFormReset = () => {
  const router = useRouter();

  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
    router.push("/"); // Navigsate to homepage after reset
  };

  return (
    <button
      type="button"
      onClick={reset}
      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
      aria-label="Reset search form"
    >
      X
    </button>
  );
};

export default SearchFormReset;
