export const ReviewBox = ({ title, review_img_url, created_at, votes, category }) => {
    return (
        <li className="review-box">
            <h3>Title: {title}</h3>
            <h4>Category: {category}</h4>
            <h4>Votes: {votes}</h4>
            <h4>Created at: {created_at.slice(0, 10)}</h4>
            <img src={review_img_url} alt={title} width={350} height={350}></img>
            <hr></hr>
        </li>
    )
}