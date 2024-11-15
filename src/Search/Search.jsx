import React, { useEffect, useState } from "react";
const Search = ({ getSearch }) => {
  const [searchValue, setsearchValue] = useState("");
  const handleChange = (e) => {
    setsearchValue(e.target.value);
  };
  useEffect(() => {
    getSearch(searchValue);
  }, [searchValue]);
  return (
    <div className="flex items-center justify-center my-5">
      <input
        type="text"
        placeholder="Enter The Product Name"
        className="outline outline-yellow-400 rounded ps-2"
        onChange={handleChange}
      />
    </div>
  );
};
export default Search;