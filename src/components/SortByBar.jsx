import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SortByBar = ({ categories }) => {

    const navigate = useNavigate();
    const [sortBy, setSortBy] = useState("created_at");
    const handleSubmit = (e) => {
        e.preventDefault();
        const sortByInfo = {
            sortBy: sortBy
        }
        navigate(`/reviews/categories/${categories}?sort_by=${sortBy}`)
    };




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Sort_By">sorting reviews by:</label>
                <select
                    id="Sort_By"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="created_at">created at</option>
                    <option value="comment_count">comment count</option>
                    <option value="votes">votes</option>
                </select>{" "}
                <button type="submit">submit</button>
            </form>
        </div>
    )
};