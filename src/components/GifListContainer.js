import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";
function GifListContainer() {
  const [gifData, setGifData] = useState([]);
  const [placement, setPlacement] = useState("Dogs");
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${placement}&api_key=nZ1RBHN7DVRujg4aBdlIPizcZtPU0KY9`
    )
      .then((r) => r.json())
      .then((data) => setGifData([data]));
  }, [placement]);

  return (
    <div>
      <GifSearch setPlacement={setPlacement} />
      <GifList gifData={gifData} />
    </div>
  );
}

export default GifListContainer;
