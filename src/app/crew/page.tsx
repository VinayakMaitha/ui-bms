"use client";

import { useEffect, useState } from "react";
import { fetchCrew, createCrew } from "../../services/crewService";
import styles from "./crew.module.css"; // Import the CSS module

interface Crew {
  crewId: string;
  name: string;
  role: string;
  licenceNumber: string;
}

export default function ManageCrew() {
  const [crew, setCrew] = useState<Crew[]>([]);
  const [newCrew, setNewCrew] = useState({
    name: "",
    role: "",
    licenceNumber: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);



  const handleCreateCrew = async () => {
    try {
      console.log("newCrew: ", newCrew);
      
      await createCrew(newCrew);
      setIsModalOpen(false);
      setNewCrew({
        name: "",
        role: "",
        licenceNumber: ""
      });
      const updatedCrew = await fetchCrew();
      setCrew(updatedCrew);
    } catch (error) {
      console.error("Error creating new crew: ", error);
    }
  };

  const handleEditCrew = async (crewId: number) => {
    // edit data logic
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setNewCrew({
      name: "",
      role: "",
      licenceNumber: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCrew({
      ...newCrew,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const crewData = await fetchCrew();
        setCrew(crewData);
        console.log("printing crew: ", crew);
      } catch (error) {
        console.error("Error fetching crew:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.crewContainer}>
      <div className={styles.crewHeaderContainer}>
        <h1 className={styles.crewTitle}>Manage Crew</h1>
        <button
          className={styles.crewCreateButton}
          onClick={() => setIsModalOpen(true)}
        >
          Create New Crew Member
        </button>
      </div>

      <div className={styles.crewListContainer}>
        <table>
          <thead>
            <tr>
              <th>Crew Name</th>
              <th>Role</th>
              <th>Licence Number</th>
            </tr>
          </thead>
          <tbody>
            {crew.map((member) => (
              <tr key={member.crewId}>
                <td>{member.name}</td>
                <td>{member.role}</td>
                <td>{member.licenceNumber || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Create/Edit Crew */}
      {isModalOpen && (
        <div className={styles.crewModal}>
          <div className={styles.crewModalContent}>
            <h2>Create/Edit Crew Member</h2>
            <form>
              <label htmlFor="crewName">Crew Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newCrew.name}
                onChange={handleChange}
                placeholder="Crew Name"
                required
              />

              <label htmlFor="role">Role</label>
              <input
                type="text"
                id="role"
                name="role"
                value={newCrew.role}
                onChange={handleChange}
                placeholder="Role"
                required
              />

              <label htmlFor="licenceNumber">Licence Number</label>
              <input
                type="text"
                id="licenceNumber"
                name="licenceNumber"
                value={newCrew.licenceNumber}
                onChange={handleChange}
                placeholder="licenceNumber"
                required
              />


              <div className={styles.crewModalActions}>
                <button type="submit" onClick={handleCreateCrew} className={styles.crewCreateButton}>
                  Create Crew Member
                </button>
                <button
                  type="button"
                  className={styles.crewModalCancelButton}
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
