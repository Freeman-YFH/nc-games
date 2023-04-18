import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as api from "./api";
import { CommentCard } from "./CommentCard";

export const AllComments = () => {
    const { review_id } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        api.fetchCommentsByReview_id(review_id).then((comments) => {
            setComments(comments);
        })
    }, [review_id]);

    return (
        <section className="Comments-Card">
            <h2>Comments details:</h2>
            <ul style={{ listStyle: 'none' }}>
                {comments.length === 0
                    ? <h3>No comment yet</h3>
                    :
                    comments.map(comment => {
                        return <CommentCard key={comment.comment_id} {...comment} />
                    })
                }
            </ul>
        </section>
    )
};