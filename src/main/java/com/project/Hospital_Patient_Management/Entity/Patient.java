package com.project.Hospital_Patient_Management.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Patient {
    @Id
    private int patientId;
    private String patientName;
    private int age;
    private String gender;
    private String disease;
    private String doctorName;

    // Default Constructor
    public Patient() {

    }

    // Parameterized Constructor
    public Patient(int patientId, String patientName, int age, String gender,
                   String disease, String doctorName) {
        this.patientId = patientId;
        this.patientName = patientName;
        this.age = age;
        this.gender = gender;
        this.disease = disease;
        this.doctorName = doctorName;
    }

    // Getters and Setters
    public int getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDisease() {
        return disease;
    }

    public void setDisease(String disease) {
        this.disease = disease;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    @Override
    public String toString() {
        return "Patient [patientId=" + patientId +
                ", patientName=" + patientName +
                ", age=" + age +
                ", gender=" + gender +
                ", disease=" + disease +
                ", doctorName=" + doctorName + "]";
    }
}
    
