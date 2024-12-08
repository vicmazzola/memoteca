import api from "./api.js";


const ui = {

    async fillForm(thoughtId) {
        const thought = await api.searchThoughtById(thoughtId)
        document.getElementById("thought-id").value = thought.id
        document.getElementById("thought-content").value = thought.content
        document.getElementById("thought-author").value = thought.author
    },


    cancelForm() {
        document.getElementById("thought-form").reset();
    },

    async renderThoughts(thoughtsFiltered = null) {
        const thoughtList = document.getElementById("thought-list");
        const emptyMessage = document.getElementById("empty-message")
        thoughtList.innerHTML = ""

        try {
            let thoughtsForRender 

            if (thoughtsFiltered) {
                thoughtsForRender = thoughtsFiltered
            } else {
                thoughtsForRender = await api.searchThoughts();
            }

            
            if(thoughtsForRender.length === 0){
                emptyMessage.style.display = "block";
            } else {
                emptyMessage.style.display = "none";
                thoughtsForRender.forEach(ui.addThoughtOnList)
            }
        } catch {
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

        const buttonEdit = document.createElement("button")
        thoughtAuthor.classList.add("button-edit")
        buttonEdit.onclick = () => ui.fillForm(thought.id)

        const iconEdit = document.createElement("img")
        iconEdit.src = "assets/images/icon-edit.png"
        iconEdit.alt = "Edit"
        buttonEdit.appendChild(iconEdit)

        const buttonDelete = document.createElement("button")
        buttonDelete.classList.add("button-delete")
        buttonDelete.onclick = async () => {
            try {
                await api.deleteThought(thought.id)
                ui.renderThoughts()
            } catch (error) {
                alert ("Error when trying to delete thought")
            }
        }
        
        const iconDelete = document.createElement("img")
        iconDelete.src = "assets/images/icon-delete.png"
        iconDelete.alt = "Delete"
        buttonDelete.appendChild(iconDelete)


        const icons = document.createElement("div")
        icons.classList.add("icons")
        icons.appendChild(buttonEdit)
        icons.appendChild(buttonDelete)



        li.appendChild(iconQuotes)
        li.appendChild(thoughtContent)
        li.appendChild(thoughtAuthor)
        li.appendChild(icons)
        thoughtList.appendChild(li)


    }


};

export default ui;