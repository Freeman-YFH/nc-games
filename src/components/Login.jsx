import { useState } from "react";
import { AllReviews } from "./AllReviews";

export const Login = ({ username, setUsername }) => {

    const [name, setName] = useState("jessjelly");

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = {
            username: name
        }
        setUsername(username)
    };

    if (username) { return <AllReviews /> };

    return (
        <div className="Login">
            <h2>Login page</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>{" "}
                <select id="username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                >
                    <option value="jessjelly">jessjelly</option>
                    <option value="happyamy2016">happyamy2016</option>
                    <option value="cooljmessy">cooljmessy</option>
                </select>
                {" "}
                <button type="submit">Submit</button>
            </form>

        </div>
    );
};