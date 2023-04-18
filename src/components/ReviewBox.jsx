export const ReviewBox = ({ title, review_img_url, created_at, votes, category, owner }) => {
    return (
        <li className="review-box">
            <img src={review_img_url} alt={title} width={200} height={200} id="review-box-img"></img>
            <h3>Title: {title}</h3>
            <h4>Owner: {owner}</h4>
            <h4>Category: {category}</h4>
            <h4>Votes: {votes}</h4>
            <h4>Created at: {created_at.slice(0, 10)}</h4>
            <hr></hr>
        </li>
    )
}