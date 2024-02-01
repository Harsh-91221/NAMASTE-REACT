import React from "react";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is React</h2>
            <User name={"Harsh Here Function"} />
            <UserClass name={"Harsh Here Class"} />
        </div>
    );
};
export default About;
