import React from "react";
import UserClass from "./UserClass";
class About extends React.Component {
    constructor(props)
    {
        super(props);
        console.log("Parent Constructor"); 
    }
    render() {
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is React Class Component</h2>
                <UserClass name={"Harsh Here Class"} />
            </div>
        );
    };
};
export default About;
