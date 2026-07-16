import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePatient = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const [patient, setPatient] = useState({
    patientId: "",
    patientName: "",
    age: "",
    gender: "",
    disease: "",
    doctorName: ""
  });

  useEffect(() => {
    loadPatient();
  }, []);

  const loadPatient = async () => {
    try {

      const response = await axios.get(
        `http://localhost:8080/patient/${id}`
      );

      setPatient(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {

    setPatient({
      ...patient,
      [e.target.name]: e.target.value
    });

  };

  const updatePatient = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        "http://localhost:8080/patient/update",
        patient
      );

      alert("Patient Updated Successfully");

      navigate("/patients");

    } catch (error) {

      console.log(error);

      alert("Update Failed");

    }

  };

  return (

    <div className="container">

      <h2>Update Patient</h2>

      <form onSubmit={updatePatient}>

        <label>Patient ID</label>

        <input
          type="number"
          name="patientId"
          value={patient.patientId}
          readOnly
        />

        <label>Patient Name</label>

        <input
          type="text"
          name="patientName"
          value={patient.patientName}
          onChange={handleChange}
          required
        />

        <label>Age</label>

        <input
          type="number"
          name="age"
          value={patient.age}
          onChange={handleChange}
          required
        />

        <label>Gender</label>

        <select
          name="gender"
          value={patient.gender}
          onChange={handleChange}
          required
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <label>Disease</label>

        <input
          type="text"
          name="disease"
          value={patient.disease}
          onChange={handleChange}
          required
        />

        <label>Doctor Name</label>

        <input
          type="text"
          name="doctorName"
          value={patient.doctorName}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="register-btn"
        >
          Update Patient
        </button>

      </form>

    </div>

  );
};

export default UpdatePatient;