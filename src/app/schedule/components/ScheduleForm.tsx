'use client';

import React, { useState, useEffect } from 'react';
import { fetchBuses } from '../../../services/busService';
import { fetchRoutes } from '../../../services/routeService';
import { addSchedule } from '../../../services/scheduleService';
// import Calendar from './Calendar';
import styles from '../schedule.module.css';

const ScheduleForm = () => {
  const [buses, setBuses] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [selectedBus, setSelectedBus] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const busesData = await fetchBuses();
      const routesData = await fetchRoutes();
      setBuses(busesData);
      setRoutes(routesData);
    };
    loadData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const scheduleData = { busId: selectedBus, routeId: selectedRoute, date, time: '09:00 AM' };
      await addSchedule(scheduleData);
      alert('Schedule created successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to create schedule.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                Select Bus:
                <select value={selectedBus} onChange={(e) => setSelectedBus(e.target.value)}>
                <option value="">-- Select Bus --</option>
                {buses.map((bus: any) => (
                    <option key={bus.busId} value={bus.busId}>
                    {bus.registrationNumber}
                    </option>
                ))}
                </select>
            </label>

            <label>
                Select Route:
                <select value={selectedRoute} onChange={(e) => setSelectedRoute(e.target.value)}>
                <option value="">-- Select Route --</option>
                {routes.map((route: any) => (
                    <option key={route.routeId} value={route.routeId}>
                    {route.startPoint} → {route.endPoint}
                    </option>
                ))}
                </select>
            </label>

            <label>
                Select Date:
                {/* <Calendar date={date} setDate={setDate} /> */}
            </label>

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default ScheduleForm;
