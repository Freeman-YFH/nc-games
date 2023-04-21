import { useState } from "react";
import * as api from "./api";


export const VotesReview = ({ votes, review_id }) => {

    const [addVote, setAddVote] = useState(0);
    const [plusErr, setPlusErr] = useState("");
    const [minusVote, setMinusVote] = useState(0);
    const [minusErr, setMinusErr] = useState("");
    let voteNumber = 0;

    const handlePlusClick = () => {
        setAddVote(1);
        api.patchReviewVote(review_id, voteNumber = 1).catch(() => {
            setAddVote(0);
            setPlusErr("something went wrong, please try again later...");
        })
    };

    const handleMinusClick = () => {
        setMinusVote(-1);
        api.patchReviewVote(review_id, voteNumber = -1).catch(() => {
            setMinusVote(0);
            setMinusErr("something went wrong, please try again later...");
        })
    };

    return (
        <div>
            <h3>Votes: {votes + addVote + minusVote}</h3>
            <button onClick={handlePlusClick} disabled={addVote === 1}>V + 1</button> {" "}
            <button onClick={handleMinusClick} disabled={minusVote === -1}>V - 1</button>
            <h5>(please login again if you want to vote again)</h5>
            {plusErr ? <p>{plusErr}</p> : null}
            {minusErr ? <p>{minusErr}</p> : null}
        </div>
    );
};