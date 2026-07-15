package com.project.Hospital_Patient_Management.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.Hospital_Patient_Management.Entity.Patient;

import com.project.Hospital_Patient_Management.Repository.PatientRepository;


@Service
public class PatientServiceImpl implements PatientService  {

    @Autowired
    private PatientRepository repository;

    @Override
    public Patient savePatient(Patient patient) {
        return repository.save(patient);
    }

    @Override
    public List<Patient> getAllPatients() {
        return repository.findAll();
    }

    @Override
    public Patient getPatientById(int id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Patient updatePatient(Patient patient) {
        return repository.save(patient);
    }

    @Override
    public void deletePatient(int id) {
        repository.deleteById(id);
    }

}

