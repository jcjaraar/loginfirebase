import React from "react";

const hero = (handleLogout) => {
    return(
        <section className="hero">
            <nav>
                <h2>welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>

        </section>)
}

export default hero;