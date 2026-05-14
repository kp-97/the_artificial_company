import type { ReactElement } from "react";

function Header(): ReactElement {
    return (
        <header>
            <h1>My website</h1>
            <nav>
                <ul>
                    <li><a href="#">Chat</a></li>
                    <li><a href="#">Tasks</a></li>
                    <li><a href="#">Calendar</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header;