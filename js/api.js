const api = {
    async searchThoughts() {
        try {
            const response = await fetch('http://localhost:3000/thoughts')
            return await response.json()
        } catch {
            alert('Error when searching for thoughts')
            throw console.error
            
        }
    }
}

export default api;