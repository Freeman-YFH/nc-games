
export const CommentCard = ({ author, body, comment_id, created_at, votes, setId, username }) => {

    const handleOnClick = (comment_id, author, username) => {
        // if (username !== author) {
        //     <Popup>Only User can delete his/her own comment</Popup>
        // }
        setId(comment_id)
    }
    console.log(username.username, "<==username")
    console.log(author, "<==author")
    return (
        <li>
            <h4>Author: {author}</h4>
            <h4>Comment: "{body}"</h4>
            <h4>Votes: {votes}</h4>
            <h5>Created at: {created_at.slice(0, 10)}</h5>
            <p>
                {username.username === author ? <button onClick={() => handleOnClick(comment_id, author)}>Delete comment</button> : <h5>( Delete comment function is not available as you are not the author of this comment )</h5>}
            </p>
            <hr></hr>
        </li>
    );
};