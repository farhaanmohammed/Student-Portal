import React from "react"
import '../Css/DetailView.css'
import { useParams } from "react-router-dom"
import Axios from "axios";
import { useState,useEffect } from "react";

export default function Detail(){
    const { id } = useParams();

    const[student,setStudent]=useState(null)
    console.log("idd",id)

    useEffect(()=>{
        Axios.get(`http://localhost:8080/api/v1/student/getAll/${id}`).then(res=>{
            console.log("response",res.data)
            setStudent(res.data)
        }).catch(err=>{console.log(err)})
    },[])

    console.log("student info",student);




    

    
    return(
        <div className="Detail">
            {student&&(
                <div>
                    <p>{student.studentName}</p>
                    <p>{student.dateofBirth}</p>
                    <p>{student.studentClass}</p>
                    <p>{student.studentDivision}</p>
                    <p>{student.gender}</p>
                    <p>{student.admissionNo}</p>
                </div>
            )}
        </div>
    )
}
