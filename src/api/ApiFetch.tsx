
export const fetchLunches = async () => {
    try {
        const response = await fetch("http://localhost:3001/lunches");
        return await response.json();
    } catch (error) {
        console.error('Error fetching lunches:', error);
        throw error;
    }
}