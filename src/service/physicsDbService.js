const BASE_URL = 'http://localhost:3001/physics';
export const DBService = {
    async getByID(id) {
        try {
            const response = await fetch(`${BASE_URL}/${id}`);
            if (!response.ok) {
                throw new Error(`Error fetching data for ID ${id}: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('DBService getByID error:', error);
            throw error;
        }
    },

    async getAll() {
        try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error(`Error fetching all questions: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('DBService getAll error:', error);
            throw error;
        }
    }
};