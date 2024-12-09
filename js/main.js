import ui from "./ui.js"
import api from "./api.js"


document.addEventListener("DOMContentLoaded", () => {
    ui.renderThoughts()

    const thoughtForm = document.getElementById("thought-form")
    const buttonCancel = document.getElementById("button-cancel")
    const searchInput = document.getElementById("search-field")


    thoughtForm.addEventListener("submit", manipulateSubmitForm)
    buttonCancel.addEventListener("click", manipulateCancel)
    searchInput.addEventListener("input", manipulateSearch)
})


async function manipulateSubmitForm(event) {
    event.preventDefault();
    const id = document.getElementById("thought-id").value
    const content = document.getElementById("thought-content").value
    const author = document.getElementById("thought-author").value
    const date = document.getElementById("thought-date").value

    if (!validateDate(date)) {
        alert("You can't select dates in the future. Please choose a valid date.");
        return;
    }

    try {
        if (id) {
            await api.editThought({ id, content, author, date })
        } else {
            await api.saveThought({ content, author, date })
        }
        ui.renderThoughts()

    } catch {
        alert("Error when saving thoughts")

    }

}

function manipulateCancel() {
    ui.cancelForm()
}

async function manipulateSearch() {
    const searchTerm = document.getElementById("search-field").value
    try {
        const thoughtsFiltered = await api.searchThoughtByTerm(searchTerm)
        ui.renderThoughts(thoughtsFiltered)
    } catch (error) {
        alert("Error when trying to search")
    }
}

function validateDate(date) {
    const actualDate = new Date()
    const insertDate = new Date(date)
    return insertDate <= actualDate
}