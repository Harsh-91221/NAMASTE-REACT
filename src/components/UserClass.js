import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };
        // console.log("Child Constructor");
    }
    async componentDidMount() {
        // console.log("Component Mount");
        const data = await fetch("https://api.github.com/users/Harsh-91221");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }
    render() {
        const { name, location } = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @harsh91221</h4>
            </div>
        );
    }
}
export default UserClass;
