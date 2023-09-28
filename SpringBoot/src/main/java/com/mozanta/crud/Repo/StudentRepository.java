package com.mozanta.crud.Repo;

import com.mozanta.crud.Entity.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<Student,String> {
    Student findTopByOrderByAdmissionNoDesc();
}
