import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const coffeeCup = "☕️"
    const bentoBox = "🍱"

    function round(min, value) {
        return (Math.ceil(min/value)*value)/value;
    }

    function displayEmoji() {
        if (minutes < 30) {
            return coffeeCup.repeat(round(minutes, 5))
        } else {
            return bentoBox.repeat(round(minutes, 10))
        }
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} &#8226; {displayEmoji()} {minutes + " min read"}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;