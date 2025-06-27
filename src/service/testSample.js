const BASE_URL = "http://localhost:3001/testSample";

export const getTestSample = {
  async getAllType(){
    try {
        const res = await fetch(BASE_URL);
        return await res.json();
    } catch (error) {
      console.error('Error fetching all test samples:', error);
      throw error;
    }
  },

  async getById(id) {
    try {
        const res = await fetch(`${BASE_URL}/${id}`);
        return await res.json();
    } catch (error) {
      console.error(`Error fetching test sample with ID ${id}:`, error);
      throw error;
    }
  },

  async getByType(type) {
    try {
        const res = await fetch(`${BASE_URL}?type=${type}`);
        return await res.json();
    } catch (error) {
      console.error(`Error fetching test samples with type ${type}:`, error);
      throw error;
    }
  }
};
