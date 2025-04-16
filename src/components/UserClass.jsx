/* eslint-disable react/prop-types */
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "DummyName",
        avatar_url: "DefaultLocation",
      },
    };
    // console.log(this.props.name+"child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name+"Child component did mount");
    const data = await fetch("https://api.github.com/users/Daddycool122");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  render() {
    // console.log(this.props.name+"child render");

    const { login, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} className="gitPFP" alt="" />
        <h2>Name: {login}</h2>
        <h2>Contact : Akhileshramola.2000@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
