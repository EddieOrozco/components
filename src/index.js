import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Im hungry."
        />
      </ApprovalCard>
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Jane"
        timeAgo="Today at 6:00PM"
        content="I play video games."
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Eddie"
        timeAgo="Today at 9:45AM"
        content="Nice!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
