import React from "react";
const User = ({ name }) => {
    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: Greater Noida</h3>
            <h4>Contact: @harsh91221</h4>
        </div>
    );
};
export default User;
