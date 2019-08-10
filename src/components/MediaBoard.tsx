import React from "react";

const MediaBoard = ({
  medias
}: {
  medias: Array<{ name: string; src: string }>;
}) => {
  return (
    <div className="media-board">
      {medias.map((media, i) => (
        <div key={i} className="media">
          <div>
            <img src={`${media.src}?size=100`} alt={`${media.name}'s logo`} />
          </div>
          <span>{media.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MediaBoard;
