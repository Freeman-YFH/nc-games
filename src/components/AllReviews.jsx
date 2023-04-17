import { useEffect, useState } from "react";
import * as api from "./api";
import { ReviewBox } from "./ReviewBox";

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
        return <h1>Page Loading...</h1>
    }

    return (
        <main>
            <h2>Reviews List:</h2>
            <ol className="all-reviews">
                {reviews.map(review => {
                    return <ReviewBox key={review.review_id} {...review} />
                })}
            </ol>
        </main>
    )
}