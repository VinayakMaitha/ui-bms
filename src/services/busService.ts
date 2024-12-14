import axios from "axios";

const url = `${process.env.NEXT_PUBLIC_DEV_API_BASE_URL}/api/buses`;


// Fetch buses
export const fetchBuses = async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching buses:", error);
        throw error;
    }
};

// Create a new bus
export const createBus = async (bus: {
    registrationNumber: string;
    busType: string;
    depotId: string;
    active: boolean;
}) => {
    try {
        const response = await axios.post(url, bus);
        return response.data;
    } catch (error) {
        console.error("Error creating bus:", error);
        throw error;
    }
};
