import React from "react"
import '../Css/View.css'
import { useState,useEffect } from "react";
import axios from "axios";
import {
    Table,
    Tr,
    Th,
    Td,
    TableContainer,
    Card,
    CardBody,
    CardHeader,
    Box,
    Heading,
    
} from '@chakra-ui/react'


const styles = {
    fontFamily: 'Onest, sans-serif',
    color:'#566262',
};




export default function View({ reload }){
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/api/v1/student/getAll').then(res=>{
            console.log("respose",res.data)
            setStudents(res.data)
        }).catch(err=>console.log("error",err))
    },[reload])

        console.log("students",students)


    return(
        
        <Card style={{ ...styles, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} maxWidth={{base:"100%",md:'100%'}}p={5}>
            <CardHeader>
                <Heading size='2xl' style={styles}>Student Details</Heading>
            </CardHeader>
            <CardBody>
                <Box>
                    {students.length===0 ? (

                        <Heading size={'md'} height={"600px"} style={styles}>No Records Available</Heading>

                    ):(
                        <TableContainer  p={5} paddingTop={'-10'} overflowX="auto">
                            <Table size={'lg'} height={"582px"} variant={'simple'}>
                                
                                <thead >
                                    <Tr>
                                        <Th style={styles} fontWeight={'bold'}>Admission Number</Th>
                                        <Th style={styles} fontWeight={'bold'}>Name</Th>
                                        <Th style={styles} fontWeight={'bold'}>Date Of Birth</Th>
                                        <Th style={styles} fontWeight={'bold'}>Class</Th>
                                        <Th style={styles} fontWeight={'bold'}> Division</Th>
                                        <Th style={styles} fontWeight={'bold'}>Gender</Th>

                                    </Tr>
                                    
                                </thead>
                                <tbody>
                                    {students.map((item)=>(
                                        <Tr key={item.id} style={{verticalAlign:'top'}}>
                                            <Td>{item.admissionNo?item.admissionNo : "--"}</Td>
                                            <Td>{item.studentName?item.studentName : "--"}</Td>
                                            <Td>{item.dateofBirth?item.dateofBirth : "--"}</Td>
                                            <Td>{item.studentClass?item.studentClass : "--"}</Td>
                                            <Td>{item.studentDivision?item.studentDivision : "--"}</Td>
                                            <Td>{item.studentgender?item.studentgender : "--"}</Td>

                                        </Tr>
                                    ))}
                                </tbody>
                            </Table>
                        </TableContainer>

                    )}
                    
                </Box>
                
            </CardBody>
        </Card>
        
    )
}