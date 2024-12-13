"use client"; // Enable client-side rendering

import { useEffect, useState } from "react";

export default function ManageBuses() {
    console.log("ManageBuses");
    const [buses, setBuses] = useState([]);
    const [newBus, setNewBus] = useState({ name: "" });

    const fetchBuses = async () => {
        // const response = await api.getBuses();
        const response = { data: [] };
        setBuses(response.data);
    };

    const createBus = async () => {
        // await api.createBus(newBus);
        setNewBus({ name: "" });
        fetchBuses();
    };

//   const updateBus = async (bus) => {
//     const updatedName = prompt("Enter new name", bus.name);
//     if (updatedName) {
//       await api.updateBus(bus.id, { ...bus, name: updatedName });
//       fetchBuses();
//     }
//   };

//   const deleteBus = async (id) => {
//     await api.deleteBus(id);
//     fetchBuses();
//   };

    useEffect(() => {
        fetchBuses();
    }, []);

    return (
        <div>
            <h1>Manage Buses</h1>
            <h3>Create New Bus</h3>
            <input
                type="text"
                value={newBus.name}
                onChange={(e) => setNewBus({ ...newBus, name: e.target.value })}
                placeholder="Bus Name"
            />
            <button onClick={createBus}>Create</button>
        </div>
    );
}