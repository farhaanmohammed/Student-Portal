package com.mozanta.crud.Entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "Students")
public class Student {
    @Id
    private String id;
    @Indexed(unique = true)
    private String admissionNo;

    private String StudentName;

    private String dateofBirth;

    private String studentClass;

    private String studentDivision;

    private String studentgender;




    public Student() {

    }



    public Student(String id, String admissionNo, String studentName, String dateofBirth, String studentClass, String studentDivision, String studentgender) {
        this.id = id;
        this.admissionNo = admissionNo;
        StudentName = studentName;
        this.dateofBirth = dateofBirth;
        this.studentClass = studentClass;
        this.studentDivision = studentDivision;
        this.studentgender = studentgender;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAdmissionNo() {
        return admissionNo;
    }

    public void setAdmissionNo(String adminssionNo) {
        this.admissionNo = adminssionNo;
    }

    public String getStudentName() {
        return StudentName;
    }

    public void setStudentName(String studentName) {
        StudentName = studentName;
    }

    public String getDateofBirth() {
        return dateofBirth;
    }

    public void setDateofBirth(String dateofBirth) {
        this.dateofBirth = dateofBirth;
    }

    public String getStudentClass() {
        return studentClass;
    }

    public void setStudentClass(String studentClass) {
        this.studentClass = studentClass;
    }

    public String getStudentDivision() {
        return studentDivision;
    }

    public void setStudentDivision(String studentDivision) {
        this.studentDivision = studentDivision;
    }

    public String getStudentgender() {
        return studentgender;
    }

    public void setStudentgender(String studentgender) {
        this.studentgender = studentgender;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id='" + id + '\'' +
                ", admissionNo='" + admissionNo + '\'' +
                ", StudentName='" + StudentName + '\'' +
                ", dateofBirth=" + dateofBirth +
                ", studentClass='" + studentClass + '\'' +
                ", studentDivision='" + studentDivision + '\'' +
                ", studentgender='" + studentgender + '\'' +
                '}';
    }
}
