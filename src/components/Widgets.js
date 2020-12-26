import React from "react";
import "../style/widgets.css";

import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";

import SearchIcon from "@material-ui/icons/Search";

export default function Widgets() {
  return (
    <div className="widgets">
      <h2>widgets</h2>
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1342933490275385347"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="codedailybot"
          options={{ height: "350px" }}
        />
      </div>
    </div>
  );
}
