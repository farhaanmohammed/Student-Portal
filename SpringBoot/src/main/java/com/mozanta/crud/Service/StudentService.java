package com.mozanta.crud.Service;

import com.mozanta.crud.Entity.Student;
import com.mozanta.crud.Repo.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;
    public void saveorUpdate(Student student) {
            student.setAdmissionNo(generateNextAdmissionNo());
            repo.save(student);

    }

    public List<Student> listAll() {
        List<Student> students=new ArrayList();
        students=this.repo.findAll();
        Collections.sort(students, Comparator.comparing(Student::getStudentName));
        if(!students.isEmpty() && students!=null )
            return students;
        else    {
            System.out.println("No Available Records");
            return students;

        }


    }

    //Method to generate Admission Number
    private String generateNextAdmissionNo() {
        Student lastStudent = repo.findTopByOrderByAdmissionNoDesc();
        int lastAdminNo = (lastStudent != null) ? extractAdminNo(lastStudent.getAdmissionNo()) : 0;
        return "R-" + String.format("%03d", lastAdminNo + 1);
    }

    //Method to find the previous admission number in DB
    private int extractAdminNo(String admissionNo) {
        String[] parts = admissionNo.split("-");
        return Integer.parseInt(parts[1]);
    }
}
