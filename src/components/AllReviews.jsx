import { useEffect, useState } from "react";
import * as api from "./api";
import { ReviewCard } from "./ReviewCard";
import { CategoriesBar } from "./CategoriesBar";

export const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [displayCategories, setDisplayCategories] = useState("null");

    useEffect(() => {
        setIsLoading(true);
        api.fetchReviews(displayCategories.selectCategory).then((reviews) => {
            setReviews(reviews);
            setIsLoading(false);
        })
    }, [displayCategories.selectCategory]);

    if (isLoading) {
        return <h1 className="isLoading">Loading...</h1>;
    };

    return (
        <main>
            <h2>Reviews List:</h2>
            <CategoriesBar setDisplayCategories={setDisplayCategories} />
            <ol className="All-Reviews">
                {reviews.map(review => {
                    return <ReviewCard key={review.review_id} {...review} />
                })}
            </ol>
        </main>
    );
};