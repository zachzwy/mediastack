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
          <div className="logo">
            <img src={`${media.src}?size=100`} alt={`${media.name}'s logo`} />
          </div>
          <a href={`https://www.${media.name}.com`}>@{media.name}</a>
        </div>
      ))}
    </div>
  );
};

export default MediaBoard;
