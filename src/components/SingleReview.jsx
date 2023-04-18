import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as api from "./api";
import { NavBar } from "./NavBar";

export const SingleReview = () => {
    const { review_id } = useParams();
    const [review, setReview] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        api.fetchReviewById(review_id).then((review) => {
            setReview(review);
            setIsLoading(false);
        })
    }, [review_id]);

    if (isLoading) { return <h1>Loading...</h1> }

    return (
        <main className="Single-Review">
            <NavBar />
            <img src={review.review_img_url} alt={review.title}></img>
            <h2>Game Designer: {review.designer}</h2>
            <h3>Title: {review.title}</h3>
            <h3>Review owner: {review.owner}</h3>
            <h3>Game review: {review.review_body}</h3>
            <h4>Category: {review.category}</h4>
            <h4>Comment count: {review.comment_count}</h4>
            <h4>Votes: {review.votes}</h4>
            <h5>Created at: {review.created_at.slice(0, 10)}</h5>
        </main >
    );
}