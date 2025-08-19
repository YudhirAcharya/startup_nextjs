import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <div className="max-w-md mx-auto p-6">
      <Form
        action="/"
        scroll={false}
        className="search-form flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-4 py-2
                   transition-shadow duration-300 focus-within:shadow-purple-400 focus-within:border-purple-600"
      >
        <input
          name="query"
          defaultValue={query}
          placeholder="Search...."
          className="flex-grow text-gray-900 placeholder-gray-400 text-lg font-medium outline-none"
        />
        <div className="ml-3 flex items-center gap-3">
          {
            query && <SearchFormReset /> //here we do this because button needs to be client component,
            //and form is server component
          }
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg
                       hover:bg-purple-700 active:bg-purple-800 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1"
          >
            Search
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SearchForm;
