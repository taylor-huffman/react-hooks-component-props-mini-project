import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const coffeeCup = "☕️"
    const bentoBox = "🍱"

    function round5(x) {
        return Math.ceil(x/5)*5;
    }

    function round10(x) {
        return Math.ceil(x/10)*10;
    }

    function displayEmoji() {
        if (minutes < 30) {
            return coffeeCup.repeat(round5(minutes)/5)
        } else {
            return bentoBox.repeat(round10(minutes)/10)
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