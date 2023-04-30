
export const UsernameBar = ({ username }) => {
    return (
        <div>
            {username ? <p>login as: {username.username}</p> : <p></p>}
        </div>
    )
};