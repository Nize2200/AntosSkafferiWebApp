
export const fetchLunches = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/lunches/");
        return await response.json();
    } catch (error) {
        console.error('Error fetching lunches:', error);
        throw error;
    }
}