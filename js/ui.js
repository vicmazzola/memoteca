import api from "./api.js";

const ui = {
    async renderThoughts() {
        const thoughtList = document.getElementById("thought-list");
        try {
            const thoughts = await api.searchThoughts();
            thoughts.forEach(thought => {
                const listItem = document.createElement("li");
                listItem.classList.add("thought-li");
                listItem.setAttribute("data-id", thought.id);

                const quoteIcon = document.createElement("img");
                quoteIcon.src = "assets/images/blue-quotes.png";
                quoteIcon.alt = "Blue quotes";
                quoteIcon.classList.add("icon-quotes");

                const contentDiv = document.createElement("div");
                contentDiv.classList.add("thought-content");
                contentDiv.textContent = thought.content;

                const authorDiv = document.createElement("div");
                authorDiv.classList.add("thought-author");
                authorDiv.textContent = thought.author;

                listItem.appendChild(quoteIcon);
                listItem.appendChild(contentDiv);
                listItem.appendChild(authorDiv);

                thoughtList.appendChild(listItem);
            });
        } catch (error) {
            alert("Error rendering thoughts");
            console.error("Error rendering thoughts:", error);
        }
    },
};

export default ui;
