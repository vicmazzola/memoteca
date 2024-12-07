import ui from "./ui.js"
import api from "./api.js"


document.addEventListener("DOMContentLoaded", () => {
    ui.renderThoughts()

    const thoughtForm = document.getElementById("thought-form")

    thoughtForm.addEventListener("submit", manipulateSubmitForm)


})


async function manipulateSubmitForm(event) {
    event.preventDefault();
    const id = document.getElementById("thought-id").value
    const content = document.getElementById("thought-content").value
    const author = document.getElementById("thought-author").value

    try {
        await api.saveThought({ content, author })
        ui.renderThoughts()



    } catch {
        alert("Error when saving thoughts")

    }

}