import React from "../../node_modules/react";
import SuperUserClass from "./SuperUserClass";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.name + " constructor");

    this.state = {
      userInfo: {
        name: "dummy",
        location: "Default",
        followers: 0,
        avatar_url: "https://picsum.photos/200",
      },
    };
  }

  componentDidMount() {
    // const data = await fetch("https://api.github.com/users/akshaymarch7");
    // const json = await data.json();
    // console.log(json);

    // this.setState({
    //   userInfo: json,
    // });

    console.log(this.props.name + " componentDidMount");
  }

  componentWillUnmount() {
    console.log(this.props.name + " componentWillUnmount");
  }
  render() {
    const { name, location, followers, avatar_url } = this.state.userInfo;

    console.log(this.props.name + " render");

    return (
      <div className="user-card">
        <SuperUserClass name={this.props.name} />
        <img src={avatar_url} alt="img" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Follower: {followers}</h3>
        <h4>Contact : a@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
