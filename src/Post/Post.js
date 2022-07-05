import React, { useEffect } from "react";
import axios from "axios";
export const Post = () => {
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get("postlist");
        console.log(result);
      } catch (err) {
        console.log("Error Data", err);
      }
    })();
  }, []);

  return (
    <div data-testid="post">
      Post
      <hr />
      <div data-testid="note-list"></div>
    </div>
  );
};
