export const fetchLunches = async (week: number) => {
    try {
        const response = await fetch(`http://localhost:8080/api/lunches/${week}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching lunches:", error);
        throw error;
    }
};

export const fetchNews= async () => {
    try {
        const response = await fetch("http://localhost:8080/api/news/");

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
        const response = await fetch("http://localhost:8080/api/foods/");

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
        const response = await fetch("http://localhost:8080/api/foods/Category/STARTER");

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
        const response = await fetch("http://localhost:8080/api/foods/Category/MAIN_COURSE");

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
        const response = await fetch("http://localhost:8080/api/foods/Category/DESSERT");

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
        const response = await fetch("http://localhost:8080/api/drinks/");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching drinks:", error);
        throw error;
    }
}