package com.mozanta.crud.Controller;

import com.mozanta.crud.Entity.Student;
import com.mozanta.crud.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping(value = "/save")
    private String saveStudent(@RequestBody Student student) {
        try {
            if (student.getStudentName() == null || student.getStudentName().isBlank() ||
                    student.getStudentClass() == null || student.getStudentClass().isBlank() ||
                    student.getStudentDivision() == null || student.getStudentDivision().isBlank() ||
                    student.getDateofBirth() == null || student.getDateofBirth().isBlank() ||
                    student.getStudentgender() == null || student.getStudentgender().isBlank()) {

                return "Input Error";
            } else {
                studentService.saveorUpdate(student);
                return "Record added successfully";
            }
        } catch (Exception e) {
            System.out.println("Exception in saving student details");
            return "No data";
        }
    }


    @GetMapping(value = "/getAll")
    private Iterable<Student> getStudents(){

        return studentService.listAll();
    }
}
