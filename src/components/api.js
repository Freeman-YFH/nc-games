import axios from "axios"

const gamesApi = axios.create({
    baseURL: 'https://nc-game.onrender.com/api'
});

export const fetchReviews = async () => {
    const response = await gamesApi.get('/reviews')
    return response.data.reviews;
};

export const fetchReviewById = async (review_id) => {
    const res = await gamesApi.get(`/reviews/${review_id}`)
    return res.data.review;
};