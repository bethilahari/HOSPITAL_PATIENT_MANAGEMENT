package com.project.Hospital_Patient_Management.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Hospital_Patient_Management.Entity.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {

}