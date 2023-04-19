export const UsernameBar = ({ username }) => {
    return (
        <p>
            {username ? <p>login as: {username.username}</p> : <p></p>}

        </p>
    )
};