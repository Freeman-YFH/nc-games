import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as api from "./api";
import { ReviewCard } from "./ReviewCard";
import { CategoriesBar } from "./CategoriesBar";

export const FilterReview = () => {
    const { categories } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(categories);
    const navigator = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        if (categories === "all") { categories = "" }
        api.fetchReviewByCategories(categories).then((reviews) => {
            setReviews(reviews);
            setIsLoading(false);
        })
    }, [categories]);

    useEffect(() => {
        if (selectedCategory !== categories) {
            navigator(`/reviews/categories/${selectedCategory}`)
        }
    }, [selectedCategory])

    if (isLoading) {
        return <h1 className="isLoading">Loading...</h1>;
    };

    return (
        <div>
            <h2>Category on: {`${selectedCategory}`}</h2>
            <CategoriesBar setDisplayCategories={setSelectedCategory} />
            <ol className="All-Reviews">
                {reviews.map(review => {
                    return <ReviewCard key={review.review_id} {...review} />
                })}
            </ol>
        </div>
    );
};