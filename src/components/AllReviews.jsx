import { useEffect, useState } from "react";
import * as api from "./api";
import { ReviewCard } from "./ReviewCard";
import { CategoriesBar } from "./CategoriesBar";
import { useNavigate } from "react-router-dom";
import { SortByBar } from "./SortByBar";

export const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [displayCategories, setDisplayCategories] = useState("all");
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        api.fetchReviews().then((reviews) => {
            setReviews(reviews);
            setIsLoading(false);
        })
    }, []);

    useEffect(() => {
        if (displayCategories !== "all") {
            navigate(`/reviews/categories/${displayCategories}`)
        }
    }, [displayCategories])

    if (isLoading) {
        return <h1 className="isLoading">Loading...</h1>;
    };

    return (
        <main>
            <h2>Reviews List:</h2>
            <CategoriesBar setDisplayCategories={setDisplayCategories} />
            <SortByBar />
            <ol className="All-Reviews">
                {reviews.map(review => {
                    return <ReviewCard key={review.review_id} {...review} />
                })}
            </ol>
        </main>
    );
};