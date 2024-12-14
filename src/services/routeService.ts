import axios from 'axios';

const BASE_URL = `${process.env.NEXT_PUBLIC_DEV_API_BASE_URL}/api/routes`;

// Get list of all routes
export const fetchRoutes = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching routes:', error);
    throw error;
  }
};

// Add a new route
export const createRoute = async (route : {
  routeName: string;
  startPoint: string;
  endPoint: string;
  passengers: number;
  depotId: number;
  active: boolean;
}) => {
  try {
    const response = await axios.post(BASE_URL, route);
    return response.data;
  } catch (error) {
    console.error('Error adding route:', error);
    throw error;
  }
};
