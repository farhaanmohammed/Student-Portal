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
    private String savaStudent(@RequestBody Student student){

        studentService.saveorUpdate(student);

        return student.getId();
    }

    @GetMapping(value = "/getAll")
    private Iterable<Student> getStudents(){

        return studentService.listAll();
    }
}
