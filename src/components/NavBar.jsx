import { Link, useNavigate } from "react-router-dom";

export const NavBar = (username) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <div className="NavBar">
            <Link to="/" onClick={handleClick}>Login page</Link> {" "}
            <Link to="/reviews">All Reviews</Link>
        </div>
    );
}