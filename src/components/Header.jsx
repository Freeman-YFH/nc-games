import { UsernameBar } from "./UsernameBar";

export const Header = ({ username }) => {
    return (
        <main>
            <h1 className="Header">NC Games Forum</h1>
            <UsernameBar username={username} />
        </main>
    );
};