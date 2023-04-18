export const CommentCard = ({ author, body, comment_id, created_at, votes }) => {
    return (
        <li>
            <h4>Author: {author}</h4>
            <h4>Comment: "{body}"</h4>
            <h4>Votes: {votes}</h4>
            <h5>Created at: {created_at.slice(0, 10)}</h5>
            <hr></hr>
        </li>
    );
};