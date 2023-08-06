import React from "react";

class SuperUserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " super constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " super componentDidMount");
  }

  componentWillUnmount() {
    console.log(this.props.name + " super componentWillUnmount");
  }

  render() {
    console.log(this.props.name + " super render");

    return <div></div>;
  }
}

export default SuperUserClass;
