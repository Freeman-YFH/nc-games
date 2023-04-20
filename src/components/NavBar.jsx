import { Link } from "react-router-dom";

export const NavBar = (username) => {

    // const handleClick = () => {
    //     username = undefined
    // };

    return (
        <div className="NavBar">
            {/* <Link to="/" onClick={handleClick}>Login page</Link> */}
            <Link to="/reviews">All Reviews</Link>
        </div>
    );
}