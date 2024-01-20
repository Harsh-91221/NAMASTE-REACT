import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", { id: "heading" }, "Namaste");
const jsxHeading = <h1 id="heading">Namaste React</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(jsxHeading);