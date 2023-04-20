import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as api from "./api";
import { CommentCard } from "./CommentCard";

export const AllComments = ({ username }) => {
    const { review_id } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        api.fetchCommentsByReview_id(review_id).then((comments) => {
            setComments(comments);
        })
    }, [review_id]);

    const [newComment, setNewComment] = useState("");
    const [err, setErr] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();


        const addComment = {
            username: username.username,
            body: newComment
        };
        let date = new Date().toJSON();
        const newCommentObj = {
            body: newComment,
            review_id: review_id,
            author: username.username,
            votes: 0,
            created_at: date
        }
        setComments((currentComments) => [newCommentObj, ...currentComments])

        api.postCommentToReview(review_id, addComment).catch(() => {
            setComments((currentComments) => {
                const commentArrCopy = [...currentComments]
                commentArrCopy.shift()
                return commentArrCopy
            });
            setNewComment("");
            setErr("something went wrong, please try again later...");
        })
        setNewComment("");
    };

    return (
        <section className="Comments-Card">
            <div>
                <form className="PostComment" onSubmit={handleSubmit}>
                    <label htmlFor="post-comment">Comment</label>
                    <textarea
                        id="post-comment"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        rows={4} cols={50} required></textarea>{" "}
                    <button type="submit">Post!</button>
                </form>
            </div >

            <h2>Comments details:</h2>
            <ul style={{ listStyle: 'none' }}>
                {comments.length === 0
                    ? <h3>No comment yet</h3>
                    :
                    comments.map(comment => {
                        return <CommentCard key={comment.created_at} {...comment} />
                    })
                }
            </ul>
        </section>
    )
};