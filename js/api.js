const URL_BASE = "http://localhost:5500";

const api = {
  async searchThoughts() {
    try {
      const response = await axios.get(`${URL_BASE}/thoughts`);
      return response.data;
    } catch (error) {
      alert("Error when searching for thoughts");
      throw error;
    }
  },

  async saveThought(thought) {
    try {
      const response = await axios.post(`${URL_BASE}/thoughts`, thought);
      return response.data;
    } catch (error) {
      alert("Error when saving thought");
      throw error;
    }
  },

  async searchThoughtById(id) {
    try {
      const response = await axios.get(`${URL_BASE}/thoughts/${id}`);
      return response.data;
    } catch (error) {
      alert("Error when searching for thought");
      throw error;
    }
  },

  async editThought(thought) {
    try {
      const response = await axios.put(`${URL_BASE}/thoughts/${thought.id}`, thought);
      return response.data;
    } catch (error) {
      alert("Error when trying to edit thought");
      throw error;
    }
  },

  async deleteThought(id) {
    try {
      await axios.delete(`${URL_BASE}/thoughts/${id}`);
    } catch (error) {
      alert("Error when trying to delete thought");
      throw error;
    }
  },

  async searchThoughtByTerm(term) {
    try {
      const thoughts = await this.searchThoughts();
      const termInLowerCase = term.toLowerCase();

      const thoughtsFiltered = thoughts.filter((thought) => {
        return (
          thought.content.toLowerCase().includes(termInLowerCase) ||
          thought.author.toLowerCase().includes(termInLowerCase)
        );
      });
      return thoughtsFiltered;
    } catch (error) {
      alert("Error when filtering thoughts");
      throw error;
    }
  },

  async updateFav(id, fav) {
    try {
      const response = await axios.patch(`${URL_BASE}/thoughts/${id}`, { fav });
      return response.data;
    } catch (error) {
      alert("Error when updating favorite status");
      throw error;
    }
  },
};

export default api;
