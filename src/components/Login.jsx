import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "./api";

export const Login = ({ setUsername }) => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [nameApi, setNameApi] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = {
            username: name
        }
        setUsername(username)
        if (username) { navigate("/reviews") };
    };

    useEffect(() => {
        api.fetchUsers().then((users) => {
            setNameApi(users)
        })
    }, [])

    return (
        <div className="Login">
            <h2>Login page</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>{" "}
                <select id="username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                >
                    {nameApi.map((name) => {
                        return <option key={name.name} value={name.username} >{name.username}</option>
                    })}
                </select>
                {" "}
                <button type="submit">Submit</button>
            </form>

        </div>
    );
};
