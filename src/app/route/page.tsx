"use client";

import { useEffect, useState } from "react";

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
  const [newRoute, setNewRoute] = useState({ name: "" });

  const fetchRoutes = async () => {
    const url = `${process.env.NEXT_PUBLIC_DEV_API_BASE_URL}/api/routes`;
    try {
        let response = await fetch(url, {
            method: 'GET',
        });
        let result = await response.json();
        setRoutes(result);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
  };

  const createRoute = async () => {
    // await api.createRoute(newRoute);
    // setNewRoute({ name: "" });
    fetchRoutes();
  };

//   const updateRoute = async (route) => {
//     const updatedName = prompt("Enter new name", route.name);
//     if (updatedName) {
//       await api.updateRoute(route.id, { ...route, name: updatedName });
//       fetchRoutes();
//     }
//   };

//   const deleteRoute = async (id) => {
//     await api.deleteRoute(id);
//     fetchRoutes();
//   };

  useEffect(() => {
    fetchRoutes();
  }, []);

  return (
    <div>
      <h1>Manage Routes</h1>
      <div>
        <table>
            <thead>
            <tr>
                {Object.keys(routes[0] || {}).map((key) => (
                <th key={key}>{key}</th>
                ))}
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {routes.map((item) => (
                <tr key={item.routeId}>
                {Object.values(item).map((val, index) => (
                    <td key={index}>{val}</td>
                ))}
                {/* <td>
                    <button onClick={() => onEdit(item)}>Edit</button>
                    <button onClick={() => onDelete(item.id)}>Delete</button>
                </td> */}
                </tr>
            ))}
            </tbody>
        </table>
      </div>
      <h3>Create New Route</h3>
      <input
        type="text"
        value={newRoute.name}
        onChange={(e) => setNewRoute({ ...newRoute, name: e.target.value })}
        placeholder="Route Name"
      />
      <button onClick={createRoute}>Create</button>
    </div>
  );
}
