import React from "react";
import ReactDOM from "react-dom/client";
//Another way of writing the component function but arrow funtion is preferrable
const Title = function () {
    return (
        <h1 className="head">
            Component Function
        </h1>
    );
};
//Component function using arrow funtion
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="Heading">React Functional Component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);