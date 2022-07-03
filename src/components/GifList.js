import React from "react";

function GifList({ gifData }) {
  return (
    <div>
      {" "}
      {gifData.map((gif) => (
        <ul key={gif}>
          {gif.data.map((getImg) => (
            <li key={getImg.id}>
              <img src={getImg.images.original.url} alt="gif" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default GifList;
