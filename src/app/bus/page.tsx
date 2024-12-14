"use client";

import { useEffect, useState } from "react";
import { fetchBuses, createBus } from "../../services/busService"; // Add createBus API
import styles from "./bus.module.css"; // Import CSS module
import Navbar from "../../components/Navbar";

// Create interface for buses
interface Bus {
    busId: number;
    registrationNumber: string;
    busType: string;
    depotId: number;
    active: boolean;
}

export default function ManageBuses() {
    const [buses, setBuses] = useState<Bus[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [newBus, setNewBus] = useState({
        registrationNumber: "",
        busType: "",
        depotId: "",
        active: false,
    });

    // Load bus data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const busData = await fetchBuses();
                setBuses(busData);
            } catch (error) {
                console.error("Error fetching buses:", error);
            }
        };
        fetchData();
    }, []);

    // Handle form submission
    const handleCreateBus = async () => {
        try {
            // check if bus with registration number already exists
            const existingBus = buses.find((bus) => bus.registrationNumber === newBus.registrationNumber);
            if (existingBus) {
                alert("Bus with this registration number already exists.");
                return;
            }
            // else create new bus
            const res = await createBus(newBus); 

            // reseting the form and closing the modal
            setNewBus({ registrationNumber: "", busType: "", depotId: "", active: false });
            setIsModalOpen(false);

            // Refresh bus data
            const updatedBuses = await fetchBuses();
            setBuses(updatedBuses);
        } catch (error) {
            console.error("Error creating bus:", error);
        }
    };

    return (
        <div>
            <div className={styles.container}>

                <div className={styles.header_container}>
                    <h1>Manage Buses</h1>
                    <button className={styles.create_button} onClick={() => setIsModalOpen(true)}>
                        Create New Bus
                    </button>
                </div>

                <div className={styles.busList}>
                <table>
                        <thead>
                            <tr>
                                <th>Registration Number</th>
                                <th>Bus Type</th>
                                <th>Depot ID</th>
                                <th>Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            {buses.map((bus) => (
                                <tr key={bus.busId}>
                                    <td>{bus.registrationNumber}</td>
                                    <td>{bus.busType}</td>
                                    <td>{bus.depotId}</td>
                                    <td>{bus.active ? "Yes" : "No"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <h2>Create New Bus</h2>
                            <form>
                                <label>Registration Number</label>
                                <input
                                    type="text"
                                    value={newBus.registrationNumber}
                                    onChange={(e) =>
                                        setNewBus({ ...newBus, registrationNumber: e.target.value })
                                    }
                                    placeholder="Registration Number"
                                />
                                <label>Bus Type</label>
                                <input
                                    type="text"
                                    value={newBus.busType}
                                    onChange={(e) => setNewBus({ ...newBus, busType: e.target.value })}
                                    placeholder="Bus Type"
                                />
                                <label>Depot ID</label>
                                <input
                                    type="number"
                                    value={newBus.depotId}
                                    onChange={(e) => setNewBus({ ...newBus, depotId: e.target.value })}
                                    placeholder="Depot ID"
                                />
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={newBus.active}
                                        onChange={(e) => setNewBus({ ...newBus, active: e.target.checked })}
                                    />
                                    Active
                                </label>
                            </form>
                            <div className={styles.modalActions}>
                                <button onClick={handleCreateBus}>Submit</button>
                                <button onClick={() => setIsModalOpen(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
