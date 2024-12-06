const api = {
    async searchThoughts() {
        try {
            const response = await fetch('http://localhost:3000/thoughts')
            return await response.json()
        } catch {
            alert('Error when searching for thoughts')
            throw error
            
        }
    },

    async saveThought(thought) {
        try {
            const response = await fetch('http://localhost:3000/thoughts', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(thought)
            } )
            return await response.json()
        } catch {
            alert('Error when searching for thoughts')
            throw error
            
        }
    }

}

export default api;