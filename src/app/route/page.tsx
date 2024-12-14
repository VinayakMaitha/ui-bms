"use client";

import { useEffect, useState } from "react";
import { fetchRoutes, createRoute } from "../../services/routeService";
import styles from "./route.module.css"; // Import the CSS module

interface Route {
  routeId: number;
  routeName: string;
  startPoint: string;
  endPoint: string;
  passengers: number;
  depotId: number;
  active: boolean;
}

export default function ManageRoutes() {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [newRoute, setNewRoute] = useState({
    routeName: "",
    startPoint: "",
    endPoint: "",
    passengers: 0,
    depotId: 0,
    active: true,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  const handleCreateRoute = async () => {
    try {
      // adding new route
      await createRoute(newRoute);

      // reseting states
      setIsModalOpen(false);
      setNewRoute({
        routeName: "",
        startPoint: "",
        endPoint: "",
        passengers: 0,
        depotId: 0,
        active: true,
      });

      // fetcing updated data
      const updated_routes = await fetchRoutes();
      setRoutes(updated_routes)
    } catch (error) {
      console.error("Error creating route : ", error);
    }
  };

  // const handleEditRoute = async (routeId: number) => {
    
  // };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setNewRoute({
      routeName: "",
      startPoint: "",
      endPoint: "",
      passengers: 0,
      depotId: 0,
      active: true,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRoute({
      ...newRoute,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const routeData = await fetchRoutes();
        setRoutes(routeData);
      } catch(error) {
        console.error("Error fetching routes:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.routeContainer}>
      <div className={styles.routeHeaderContainer}>
        <h1 className={styles.routeTitle}>Manage Routes</h1>
        <button
          className={styles.routeCreateButton}
          onClick={() => setIsModalOpen(true)}
        >
          Create New Route
        </button>
      </div>

      <div className={styles.routeListContainer}>
        <table>
          <thead>
            <tr>
              <th>Route Name</th>
              <th>Start Point</th>
              <th>End Point</th>
              <th>Passengers</th>
              <th>Depot ID</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route) => (
              <tr key={route.routeId}>
                <td>{route.routeName}</td>
                <td>{route.startPoint}</td>
                <td>{route.endPoint}</td>
                <td>{route.passengers}</td>
                <td>{route.depotId}</td>
                <td>{route.active ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Create/Edit Route */}
      {isModalOpen && (
        <div className={styles.routeModal}>
          <div className={styles.routeModalContent}>
            <h2>Create/Edit Route</h2>
            <form>
              <label htmlFor="routeName">Route Name</label>
              <input
                type="text"
                id="routeName"
                name="routeName"
                value={newRoute.routeName}
                onChange={handleChange}
                placeholder="Route Name"
                required
              />

              <label htmlFor="startPoint">Start Point</label>
              <input
                type="text"
                id="startPoint"
                name="startPoint"
                value={newRoute.startPoint}
                onChange={handleChange}
                placeholder="Start Point"
                required
              />

              <label htmlFor="endPoint">End Point</label>
              <input
                type="text"
                id="endPoint"
                name="endPoint"
                value={newRoute.endPoint}
                onChange={handleChange}
                placeholder="End Point"
                required
              />

              <label htmlFor="passengers">Passengers</label>
              <input
                type="number"
                id="passengers"
                name="passengers"
                value={newRoute.passengers}
                onChange={handleChange}
                placeholder="Number of Passengers"
                required
              />

              <label htmlFor="depotId">Depot ID</label>
              <input
                type="number"
                id="depotId"
                name="depotId"
                value={newRoute.depotId}
                onChange={handleChange}
                placeholder="Depot ID"
                required
              />

              <label>
                Active
                <input
                  type="checkbox"
                  checked={newRoute.active}
                  onChange={(e) =>
                    setNewRoute({ ...newRoute, active: e.target.checked })
                  }
                />
              </label>

              <div className={styles.routeModalActions}>
                <button type="submit" onClick={handleCreateRoute} className={styles.routeCreateButton}>
                  Create Route
                </button>
                <button
                  type="button"
                  className={styles.routeModalCancelButton}
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
