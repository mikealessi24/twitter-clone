import React from "react";
import "../style/feed.css";
import TweetBox from "../components/TweetBox";
import Post from "../components/Post";

export default function Feed() {
  const [posts, setPosts] = React.useState([]);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName={"Mike Alessi"}
        username={"alessimg24"}
        verified={true}
        text={"is working..."}
        avatar={"/portfolioImg.jpeg"}
        image={
          "https://freepngimg.com/thumb/dragon_ball/23399-8-dragon-ball-goku-photos.png"
        }
      />
    </div>
  );
}
