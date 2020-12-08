import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "../style/tweetBox.css";

export default function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="/portfolioImg.jpeg" />
          <input placeholder="What's Happening?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}
