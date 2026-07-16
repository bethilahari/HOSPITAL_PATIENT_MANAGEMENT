import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [patient, setPatient] = useState({
    patientId: "",
    patientName: "",
    age: "",
    gender: "",
    disease: "",
    doctorName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  const registerPatient = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/patient/save", patient);

      alert("Patient Registered Successfully!");

      setPatient({
        patientId: "",
        patientName: "",
        age: "",
        gender: "",
        disease: "",
        doctorName: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to Register Patient!");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Patient Registration</h2>
        <p className="subtitle">
          Enter the patient details below to register a new patient.
        </p>

        <form onSubmit={registerPatient} className="register-form">

          <div className="form-group">
            <label>Patient ID</label>
            <input
              type="number"
              name="patientId"
              placeholder="Enter Patient ID"
              value={patient.patientId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Patient Name</label>
            <input
              type="text"
              name="patientName"
              placeholder="Enter Patient Name"
              value={patient.patientName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter Age"
              value={patient.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={patient.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Disease</label>
            <input
              type="text"
              name="disease"
              placeholder="Enter Disease"
              value={patient.disease}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Doctor Name</label>
            <input
              type="text"
              name="doctorName"
              placeholder="Enter Doctor Name"
              value={patient.doctorName}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Register Patient
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;