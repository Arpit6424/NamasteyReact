import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  async componentDidMount() {
    console.log("parent componentDidMount");
  }

  componentWillUnmount() {
    console.log("parent componentWillUnmount");
  }

  render() {
    console.log("parent render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        {/* <User name={"Akshay Saini (funtion)"} /> */}
        <UserClass name={"First Child"} location={"Gadarwara"} />
        <UserClass name={"Second Child"} location={"Gadarwara"} />
      </div>
    );
  }
}

export default About;
