export const fetchLunches = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/lunches/"); // Add http://

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching lunches:", error);
        throw error;
    }
};
