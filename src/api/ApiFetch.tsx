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

export const fetchFoods = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/foods/"); // Add http://

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching foods:", error);
        throw error;
    }
};

export const fetchStarters = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/foods/Category/{Starter}"); // Add http://

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching starters:", error);
        throw error;
    }
}

export const fetchMain = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/foods/Category/{Main}"); // Add http://

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching main:", error);
        throw error;
    }
}

export const fetchDesserts = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/foods/Category/{Dessert}"); // Add http://

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching desserts:", error);
        throw error;
    }
}

export const fetchDrinks = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/foods/Category/{Drink}"); // Add http://

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching drinks:", error);
        throw error;
    }
}