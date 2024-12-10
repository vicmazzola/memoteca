import ui from "./ui.js"
import api from "./api.js"

const thoughtsSet = new Set()

async function addKeyToThought() {
    try {
        const thoughts = await api.searchThoughts()
        thoughts.forEach(thought => {
            const keyThought =
                `${thought.content.trim().toLowerCase()}-${thought.author.trim().toLowerCase()}`
                thoughtsSet.add(keyThought)
        })
    } catch (error) {
        alert("Error while adding a key to the thought.");
    }
}


function removeSpace(string) {
    return string.replaceAll(/\s+/g, '')
}

const regexContent = /^[A-Za-z\s]{10,}$/;

function validateContent(content) {
    return regexContent.test(content)
}


const regexAuthor = /^[a-zA-Z]{3,15}$/;

function validateAuthor(author) {
    return regexAuthor.test(author)
}



document.addEventListener("DOMContentLoaded", () => {
    ui.renderThoughts()
    addKeyToThought()

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

    const contentWithoutSpace = removeSpace(content)
    const authorWithoutSpace = removeSpace(author)

    if (!validateContent(contentWithoutSpace)) {
        alert("Only letters and minimum 10 characters");
        return;
    }

    if (!validateAuthor(authorWithoutSpace)) {
        alert("Only letters and between 3 and 15");
        return;
    }

    if (!validateDate(date)) {
        alert("You can't select dates in the future. Please choose a valid date.");
        return;
    }

    const keyNewThought =
        `${content.trim().toLowerCase()}-${author.trim().toLowerCase()}`

    if (thoughtsSet.has(keyNewThought)) {
        alert("This thought already been registered!")
        return
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