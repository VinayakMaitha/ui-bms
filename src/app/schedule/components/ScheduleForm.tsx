'use client';

// import React, { useState, useEffect } from 'react';
// import { fetchBuses } from '../../../services/busService';
// import { fetchRoutes } from '../../../services/routeService';
// import { addSchedule } from '../../../services/scheduleService';
// import Calendar from './Calendar';
// import styles from '../schedule.module.css';

const ScheduleForm = () => {
  // const [buses, setBuses] = useState([]);
  // const [routes, setRoutes] = useState([]);
  // const [selectedBus, setSelectedBus] = useState('');
  // const [selectedRoute, setSelectedRoute] = useState('');
  // const [date, setDate] = useState('');

  // useEffect(() => {
  //   const loadData = async () => {
  //     const busesData = await fetchBuses();
  //     const routesData = await fetchRoutes();
  //     setBuses(busesData);
  //     setRoutes(routesData);
  //   };
  //   loadData();
  // }, []);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const scheduleData = { busId: selectedBus, routeId: selectedRoute, date, time: '09:00 AM' };
  //     await addSchedule(scheduleData);
  //     alert('Schedule created successfully!');
  //   } catch (error) {
  //     console.error(error);
  //     alert('Failed to create schedule.');
  //   }
  // };

  return (
    <div>

    </div>
  );
};

export default ScheduleForm;
