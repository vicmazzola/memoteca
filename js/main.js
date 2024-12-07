import ui from "./ui.js"
import api from "./api.js"


document.addEventListener("DOMContentLoaded", () => {
    ui.renderThoughts()

    const thoughtForm = document.getElementById("thought-form")
    const buttonCancel = document.getElementById("button-cancel")

    thoughtForm.addEventListener("submit", manipulateSubmitForm)
    buttonCancel.addEventListener("click", manipulateCancel)


})


async function manipulateSubmitForm(event) {
    event.preventDefault();
    const id = document.getElementById("thought-id").value
    const content = document.getElementById("thought-content").value
    const author = document.getElementById("thought-author").value

    try {
        if (id) {
            await api.editThought({ id, content, author })
        } else {
            await api.saveThought({ content, author })
        }
        ui.renderThoughts()

    } catch {
        alert("Error when saving thoughts")

    }

}

function manipulateCancel() {
    ui.cancelForm()
}