import { useState } from "react";
import { AllReviews } from "./AllReviews";

export const Login = ({ username, setUsername }) => {

    const [name, setName] = useState("grumpy19");

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
                    <option value="grumpy19">grumpy19</option>
                    <option value="tickle122">tickle122</option>
                </select>
                {" "}
                <button type="submit">Submit</button>
            </form>

        </div>
    );
};