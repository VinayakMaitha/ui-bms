import axios from 'axios';

const BASE_URL = `${process.env.NEXT_PUBLIC_DEV_API_BASE_URL}/api/schedules`;


// Get list of all schedules
export const fetchSchedules = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching schedules:', error);
    throw error;
  }
};

// Add a new schedule
export const addSchedule = async (scheduleData: { busId: string; routeId: string; date: string; time: string }) => {
  try {
    const response = await axios.post(BASE_URL, scheduleData);
    return response.data;
  } catch (error) {
    console.error('Error adding schedule:', error);
    throw error;
  }
};
