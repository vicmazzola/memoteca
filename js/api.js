const URL_BASE = "http://localhost:3000"


const api = {
    async searchThoughts() {
        try {
            const response = await fetch(`${URL_BASE}/thoughts`)
            return await response.json()
        } catch {
            alert('Error when searching for thoughts')
            throw error

        }
    },

    async saveThought(thought) {
        try {
            const response = await fetch(`${URL_BASE}/thoughts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(thought)
            })
            return await response.json()
        } catch {
            alert('Error when searching for thoughts')
            throw error

        }
    },

    async searchThoughtById(id) {
        try {
            const response = await fetch(`${URL_BASE}/thoughts/${id}`)
            return await response.json()
        } catch {
            alert('Error when searching for thought')
            throw error

        }
    },

    async editThought(thought) {
        try {
            const response = await fetch(`${URL_BASE}/thoughts/${thought.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(thought)
            })
            return await response.json()
        }
        catch {
            alert('Error when try to edit thought')
            throw error
        }
    },

    async deleteThought(id) {
        try {
            const response = await fetch(`${URL_BASE}/thoughts/${id}`, {
                method: "DELETE",
            })

        }
        catch {
            alert('Error when trying to delete thought')
            throw error
        }
    }



}

export default api;