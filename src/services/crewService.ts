import axios from "axios";

const url = `${process.env.NEXT_PUBLIC_DEV_API_BASE_URL}/api/crew`;


// Fetch buses
export const fetchCrew = async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching crew:", error);
        throw error;
    }
};

// Create a new bus
export const createCrew = async (crew: {
    name: string;
    role: string;
    licenceNumber: string;
}) => {
    try {
        const response = await axios.post(url, crew);
        return response.data;
    } catch (error) {
        console.error("Error creating bus:", error);
        throw error;
    }
};
