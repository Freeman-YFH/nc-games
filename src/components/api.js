import axios from "axios"

const gamesApi = axios.create({
    baseURL: 'https://nc-game.onrender.com/api'
});

export const fetchReviews = async () => {
    const res = await gamesApi.get('/reviews')
    return res.data.reviews;
};

export const fetchReviewById = async (review_id) => {
    const res = await gamesApi.get(`/reviews/${review_id}`)
    return res.data.review;
};

export const fetchCommentsByReview_id = async (review_id) => {
    const res = await gamesApi.get(`/reviews/${review_id}/comments`)
    return res.data.comments;
};