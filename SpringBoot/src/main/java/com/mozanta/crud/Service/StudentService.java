package com.mozanta.crud.Service;

import com.mozanta.crud.Entity.Student;
import com.mozanta.crud.Repo.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;
    public void saveorUpdate(Student student) {
        student.setAdmissionNo(generateNextAdmissionNo());
        repo.save(student);
    }

    public Iterable<Student> listAll() {

        return  this.repo.findAll();
    }

    private String generateNextAdmissionNo() {
        Student lastStudent = repo.findTopByOrderByAdmissionNoDesc();
        int lastAdminNo = (lastStudent != null) ? extractAdminNo(lastStudent.getAdmissionNo()) : 0;
        return "R-" + String.format("%03d", lastAdminNo + 1);
    }

    private int extractAdminNo(String admissionNo) {
        String[] parts = admissionNo.split("-");
        return Integer.parseInt(parts[1]);
    }
}
