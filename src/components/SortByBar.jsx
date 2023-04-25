import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SortByBar = ({ sortByValue, setSortByValue }) => {

    const [sortBy, setSortBy] = useState("?sort_by=created_at");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSortByValue(sortBy)
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
                    <option value="?sort_by=created_at">created at</option>
                    <option value="?sort_by=comment_count">comment count</option>
                    <option value="?sort_by=votes">votes</option>
                </select>{" "}
                <button type="submit">submit</button>
            </form>
        </div>
    )
};