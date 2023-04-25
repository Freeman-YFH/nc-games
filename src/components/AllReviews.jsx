import { useEffect, useState } from "react";
import * as api from "./api";
import { ReviewCard } from "./ReviewCard";
import { CategoriesBar } from "./CategoriesBar";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SortByBar } from "./SortByBar";

export const AllReviews = ({ sortByValue, setSortByValue }) => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [displayCategories, setDisplayCategories] = useState("all");
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const sortByQuery = searchParams.get('sort_by');


    useEffect(() => {
        setIsLoading(true);
        api.fetchReviews(sortByQuery).then((reviews) => {
            setReviews(reviews);
            setIsLoading(false);
        })
    }, [sortByQuery]);

    useEffect(() => {
        if (displayCategories !== "all") {
            navigate(`/reviews/categories/${displayCategories}`)
        }
    }, [displayCategories]);

    useEffect(() => {
        if (sortByValue) {
            navigate(`/reviews${sortByValue}`)
        }
    }, [sortByValue]);

    if (isLoading) {
        return <h1 className="isLoading">Loading...</h1>;
    };

    return (
        <main>
            <h2>Reviews List:</h2>
            <CategoriesBar setDisplayCategories={setDisplayCategories} />
            <SortByBar setSortByValue={setSortByValue} />
            <ol className="All-Reviews">
                {reviews.map(review => {
                    return <ReviewCard key={review.review_id} {...review} />
                })}
            </ol>
        </main>
    );
};