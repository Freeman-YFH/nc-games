import { useEffect, useState } from "react";
import * as api from "./api";
import { ReviewCard } from "./ReviewCard";

export const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);
        api.fetchReviews().then((reviews) => {
            setReviews(reviews);
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return <h1 className="isLoading">Loading...</h1>
    }

    return (
        <main>
            <h2>Reviews List:</h2>
            <ol className="All-Reviews">
                {reviews.map(review => {
                    return <ReviewCard key={review.review_id} {...review} />
                })}
            </ol>
        </main>
    );
};