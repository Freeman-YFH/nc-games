import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import * as api from "./api";
import { ReviewCard } from "./ReviewCard";
import { CategoriesBar } from "./CategoriesBar";
import { SortByBar } from "./SortByBar";

export const FilterReview = ({ sortByValue, setSortByValue }) => {
    const { categories } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(categories);
    const navigator = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const sortByQuery = searchParams.get("sort_by");
    const orderQuery = searchParams.get("order");

    const setSortOrder = (direction) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("order", direction);
        setSearchParams(newParams);
    }


    useEffect(() => {
        setIsLoading(true);
        if (categories === "all") { categories = "" }
        api.fetchReviewByCategories(categories, sortByQuery, orderQuery).then((reviews) => {
            setReviews(reviews);
            setIsLoading(false);
        })
    }, [categories, sortByQuery, orderQuery]);


    useEffect(() => {
        if (selectedCategory === "all") {
            navigator("/reviews/categories")
        } else if (selectedCategory !== categories) {
            navigator(`/reviews/categories/${selectedCategory}`)
        }
    }, [selectedCategory]);

    useEffect(() => {
        if (sortByValue) {
            navigator(`/reviews/categories/${selectedCategory}${sortByValue}`)
        }
    }, [sortByValue]);

    if (isLoading) {
        return <h1 className="isLoading">Loading...</h1>;
    };

    return (
        <div>
            <h2>Category on: {`${selectedCategory}`}</h2>
            <CategoriesBar setDisplayCategories={setSelectedCategory} />
            <SortByBar setSortByValue={setSortByValue} />
            <button onClick={() => setSortOrder("asc")}>Ascending</button>
            <button onClick={() => setSortOrder("desc")}>Descending</button>
            <ol className="All-Reviews">
                {reviews.map(review => {
                    return <ReviewCard key={review.review_id} {...review} />
                })}
            </ol>
        </div>
    );
};