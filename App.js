//parent is the object(React Element) , it is not the html tag
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm am h1 tag!"), //we have mmore than 1 sibling
    React.createElement("h2", {}, "I'm am h2 tag!"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React! headin"
);

//in this is we are passing the object
const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));

console.log(heading);

//this will replace the root with parent ,if there is already data is present in root it will replace it 
root.render(parent);
// root.render(heading);
console.log(root);
