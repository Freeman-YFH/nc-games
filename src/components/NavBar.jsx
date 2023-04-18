import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="NavBar">
            <Link to="/allReviews">All Reviews</Link>
        </div>
    );
}