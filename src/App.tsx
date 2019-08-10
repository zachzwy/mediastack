import React, { useState } from "react";

import MediaBoard from "./components/MediaBoard";
import AddMedia from "./components/AddMedia";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const [medias, setMedias] = useState([
    {
      name: "facebook",
      src: "//logo.clearbit.com/facebook.com"
    },
    {
      name: "medium",
      src: "//logo.clearbit.com/medium.com"
    },
    {
      name: "twitter",
      src: "//logo.clearbit.com/twitter.com"
    },
    {
      name: "instagram",
      src: "//logo.clearbit.com/instagram.com"
    },
    {
      name: "wechat",
      src: "//logo.clearbit.com/wechat.com"
    },
    {
      name: "whatsapp",
      src: "//logo.clearbit.com/whatsapp.com"
    },
    {
      name: "meetup",
      src: "//logo.clearbit.com/meetup.com"
    },
    {
      name: "pinterest",
      src: "//logo.clearbit.com/pinterest.com"
    },
    {
      name: "youtube",
      src: "//logo.clearbit.com/youtube.com"
    },
    {
      name: "flickr",
      src: "//logo.clearbit.com/flickr.com"
    }
  ]);

  const handleAdd = (query: string) => {
    setMedias([
      ...medias,
      {
        name: query,
        src: `//logo.clearbit.com/${query}.com`
      }
    ]);
  };

  return (
    <div className="App">
      <h1>My Media Stack</h1>
      <MediaBoard medias={medias} />
      <AddMedia handleAdd={handleAdd} />
    </div>
  );
};

export default App;
