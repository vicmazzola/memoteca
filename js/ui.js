import api from "./api.js";

const ui = {
    async renderThoughts() {
        const thoughtList = document.getElementById("thought-list");
        try {
            const thoughts = await api.searchThoughts();
            thoughts.forEach(ui.addThoughtOnList)
        } catch  {
            alert("Error rendering thoughts");
        }
    },

    addThoughtOnList(thought) {
        const thoughtList = document.getElementById("thought-list")
        const li = document.createElement("li")
        li.setAttribute("data-id", thought.id)
        li.classList.add("thought-li")

        const iconQuotes = document.createElement("img")
        iconQuotes.src = "assets/images/blue-quotes.png"
        iconQuotes.alt = "Blue quotes"
        iconQuotes.classList.add("icon-quotes")

        const thoughtContent = document.createElement("div")
        thoughtContent.textContent = thought.content
        thoughtContent.classList.add("thought-content")

        const thoughtAuthor = document.createElement("div")
        thoughtAuthor.textContent = thought.author
        thoughtAuthor.classList.add("thought-author")

        li.appendChild(iconQuotes)
        li.appendChild(thoughtContent)
        li.appendChild(thoughtAuthor)
        thoughtList.appendChild(li)
    }


};

export default ui;