import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "../style/tweetBox.css";
import db from "../firebase";

export default function TweetBox() {
  const [tweetmessage, setTweetmessage] = React.useState("");
  const [tweetImage, setTweetimage] = React.useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Mike Alessi",
      username: "alessimg24",
      verified: true,
      text: tweetmessage,
      avatar:
        "https://pbs.twimg.com/profile_images/1339218595931447300/pa789KZI_400x400.jpg",
      image: tweetImage,
    });

    setTweetimage("");
    setTweetmessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1339218595931447300/pa789KZI_400x400.jpg" />
          <input
            value={tweetmessage}
            placeholder="What's Happening?"
            type="text"
            onChange={(e) => setTweetmessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
          value={tweetImage}
          onChange={(e) => setTweetimage(e.target.value)}
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}
