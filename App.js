import React from "react";
import ReactDOM from "react-dom/client";

//Recat.createElement => object => HTMLElement(render)
const heading = React.createElement("h1", {}, "heading");

//JSX - is not HTML in JS
// JSX - is HTML/XML like syntax
//parcel transpile JSX code before it reach to JS engine
//parcel also does not transpile but parcel gives to babel to done this job

//First JSX convert to React.createElement then this React.createElement(object ) render and converted to HTMlelement

//if there are multiple line in JSX then it is mandotary to use (). inside round bracket you have to write JSX
const jsxHeading = <h1 className="heading">Namastey React using JSX</h1>;

// React component
// Class Based Component - Old
// Functional Component - New

//A function which returns a JSX is known as componet
// or a function which return a react element is knowm as a component

const HeadingComponet = () => (
  <>
    <>
      {Title}
      <h1>Namastey React Functional Component</h1>
    </>
  </>
);

const Title = <h1>Title</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponet />);
