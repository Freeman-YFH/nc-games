import axios from "axios"

const gamesApi = axios.create({
    baseURL: 'https://nc-game.onrender.com/api'
});

export const fetchReviews = async (sortByQuery, orderQuery) => {
    const res = await gamesApi.get("/reviews", { params: { sort_by: sortByQuery, order: orderQuery } });
    return res.data.reviews;
};

export const fetchReviewById = async (review_id) => {
    const res = await gamesApi.get(`/reviews/${review_id}`);
    return res.data.review;
};

export const fetchCommentsByReview_id = async (review_id) => {
    const res = await gamesApi.get(`/reviews/${review_id}/comments`);
    return res.data.comments;
};

export const patchReviewVote = async (review_id, voteNumber) => {
    const res = await gamesApi.patch(`/reviews/${review_id}`, { inc_votes: voteNumber });
    return res.data.review;
};

export const postCommentToReview = async (review_id, addComment) => {
    const res = await gamesApi.post(`/reviews/${review_id}/comments`, addComment);
    return res.data.comments;
};

export const fetchCategory = async () => {
    const res = await gamesApi.get('/categories');
    return res.data.category;
};

export const fetchReviewByCategories = async (category, sortByQuery, orderQuery) => {
    const res = await gamesApi.get("/reviews", { params: { category: category, sort_by: sortByQuery, order: orderQuery } })
    return res.data.reviews;
};

export const deleteCommentsToReview = async (comment_id) => {
    await gamesApi.delete(`comments/${comment_id}`);
};

export const fetchUsers = async () => {
    const res = await gamesApi.get('/users');
    return res.data.users;
};