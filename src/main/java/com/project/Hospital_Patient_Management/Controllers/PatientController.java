package com.project.Hospital_Patient_Management.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project.Hospital_Patient_Management.Entity.Patient;
import com.project.Hospital_Patient_Management.Services.PatientService;
@RestController
@RequestMapping("/patient")
@CrossOrigin(origins = "http://localhost:5173")
public class PatientController {

   @Autowired
private PatientService service;

    @PostMapping("/save")
    public Patient savePatient(@RequestBody Patient patient) {
        return service.savePatient(patient);
    }

    @GetMapping("/all")
    public List<Patient> getAllPatients() {
        return service.getAllPatients();
    }

    @GetMapping("/{id}")
    public Patient getPatient(@PathVariable int id) {
        return service.getPatientById(id);
    }

    @PutMapping("/update")
    public Patient updatePatient(@RequestBody Patient patient) {
        return service.updatePatient(patient);
    }

    @DeleteMapping("/delete/{id}")
    public String deletePatient(@PathVariable int id) {

        service.deletePatient(id);

        return "Patient Deleted Successfully";
    }

}
