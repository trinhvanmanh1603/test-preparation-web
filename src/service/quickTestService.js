const BASE_URL = 'http://localhost:3001';

export const quickTestService = {
    async getQuickTest(type) {
        try {
            const response = await fetch(`${BASE_URL}/${type}`);
            if (!response.ok) {
                throw new Error(`Error fetching all questions: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('quickTestService getQuickTest error:', error);
            return [];
        }
    },
};
