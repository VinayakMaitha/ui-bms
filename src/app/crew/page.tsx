"use client"; // Enable client-side rendering

import { useEffect, useState } from "react";

export default function ManageCrew() {
    const [crew, setCrew] = useState([]);
    const [newCrewMember, setNewCrewMember] = useState({ name: "" });

    const fetchCrew = async () => {
        // const response = await api.getCrew();
        const response = { data: [] };
        setCrew(response.data);
    };

    const createCrewMember = async () => {
        // await api.createCrewMember(newCrewMember);
        setNewCrewMember({ name: "" });
        fetchCrew();
    };

//   const updateCrewMember = async (member) => {
//     const updatedName = prompt("Enter new name", member.name);
//     if (updatedName) {
//       await api.updateCrewMember(member.id, { ...member, name: updatedName });
//       fetchCrew();
//     }
//   };

//   const deleteCrewMember = async (id) => {
//     await api.deleteCrewMember(id);
//     fetchCrew();
//   };

    useEffect(() => {
        fetchCrew();
    }, []);

    return (
        <div>
            <h1>Manage Crew</h1>
            <h3>Create New Crew Member</h3>
            <input
                type="text"
                value={newCrewMember.name}
                onChange={(e) => setNewCrewMember({ ...newCrewMember, name: e.target.value })}
                placeholder="Crew Member Name"
            />
            <button onClick={createCrewMember}>Create</button>
        </div>
    );
}