import { memo, useContext } from "react";
import UserContext from "../utils/UserContext";

const Greeting = memo(function Greeting({ name }) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return (
    <div>
      <h3>
        Hello{name && ", "}
        {name}!
      </h3>
    </div>
  );
});

export default Greeting;
