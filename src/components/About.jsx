import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component did mount");
  }

  render() {
    console.log("parent render");

    return (
      <div className="user-cards">
        <h2>About class component</h2>
        <UserClass name={"Akhilesh (class)"} location={"Dehradun (class)"} />
      </div>
    );
  }
}

export default About;
