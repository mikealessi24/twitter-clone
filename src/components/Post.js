import React from "react";

import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "../style/post.css";

export default function Post({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="/portfolioImg.jpeg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              sample{" "}
              <span>
                <VerifiedUserIcon className="post__badge" />
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
