import React, { useState } from "react";

function GifSearch({ setPlacement }) {
  const [storeValue, setStoreValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setPlacement(storeValue);
  }
  function handleOnChange(event) {
    setStoreValue(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          type="textbox"
          value={storeValue}
          placeholder="Enter Keyword"
          onChange={handleOnChange}
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default GifSearch;
