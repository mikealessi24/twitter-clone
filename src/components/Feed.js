import React from "react";
import "../style/feed.css";
import TweetBox from "../components/TweetBox";
import Post from "../components/Post";
import db from "../firebase";
import FlipMove from "react-flip-move";

export default function Feed() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}
