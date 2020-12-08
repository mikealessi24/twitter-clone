import React from "react";
import "../style/feed.css";
import TweetBox from "../components/TweetBox";
import Post from "../components/Post";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post />
    </div>
  );
}
