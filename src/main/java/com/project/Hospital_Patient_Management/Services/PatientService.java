package com.project.Hospital_Patient_Management.Services;



import java.util.List;

import com.project.Hospital_Patient_Management.Entity.Patient;

public interface PatientService {

    Patient savePatient(Patient patient);

    List<Patient> getAllPatients();

    Patient getPatientById(int id);

    Patient updatePatient(Patient patient);

    void deletePatient(int id);

}