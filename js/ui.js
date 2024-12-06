import api from "./api.js";

const ui = {
    async renderThoughts() {
        const thoughtList = document.getElementById("thought-list");
        try {
            const thoughts = await api.searchThoughts();
            thoughts.forEach(thought => {
                thoughtList.innerHTML += `
                    <li class="thought-li" data-id="${thought.id}">
                        <img src="assets/images/blue-quotes.png" alt="Blue quotes" class="quote-icon">
                        <div class="thought-content">${thought.content}</div>
                        <div class="thought-author">${thought.author}</div>
                    </li>
                `;
            });
        } catch  {
            alert("Error rendering thoughts");
            console.error("Error rendering thoughts", error);
        }
    },
};

export default ui;