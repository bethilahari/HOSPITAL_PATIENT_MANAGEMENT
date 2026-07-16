import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewPatients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/patient/all"
      );

      setPatients(response.data);
    } catch (error) {
      console.log(error);
      alert("Unable to load patients.");
    }
  };

  const deletePatient = async (id) => {
    const confirmDelete = window.confirm(
      "Do you want to delete this patient?"
    );

    if (confirmDelete) {
      try {
        await axios.delete(
          `http://localhost:8080/patient/delete/${id}`
        );

        alert("Patient Deleted Successfully");

        loadPatients();
      } catch (error) {
        console.log(error);
        alert("Delete Failed");
      }
    }
  };

  return (
    <div className="container">

      <h2>Patient Records</h2>

      <table className="patient-table">

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Disease</th>
            <th>Doctor</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {patients.map((patient) => (

            <tr key={patient.patientId}>

              <td>{patient.patientId}</td>

              <td>{patient.patientName}</td>

              <td>{patient.age}</td>

              <td>{patient.gender}</td>

              <td>{patient.disease}</td>

              <td>{patient.doctorName}</td>

              <td>

                <Link to={`/update/${patient.patientId}`}>
                  <button className="edit-btn">
                    Edit
                  </button>
                </Link>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deletePatient(patient.patientId)
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ViewPatients;