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
    Heading
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
        
        <Card style={{ ...styles, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} >
            <CardHeader>
                <Heading size='2xl' style={styles}>Student Details</Heading>
            </CardHeader>
            <CardBody>
                <Box>
                    <TableContainer  p={5} overflowX="auto">
                        <Table size={'lg'} height={"500px"} variant={'simple'}>
                            
                            <thead >
                                <Tr>
                                    <Th style={styles} fontWeight={'bold'}>Name</Th>
                                    <Th style={styles} fontWeight={'bold'}>Admission Number</Th>
                                    <Th style={styles} fontWeight={'bold'}>Date Of Birth</Th>
                                    <Th style={styles} fontWeight={'bold'}>Class</Th>
                                    <Th style={styles} fontWeight={'bold'}> Division</Th>
                                    <Th style={styles} fontWeight={'bold'}>Gender</Th>

                                </Tr>
                                
                            </thead>
                            <tbody>
                                {students.map((item)=>(
                                    <Tr key={item.id}>
                                        <Td>{item.studentName}</Td>
                                        <Td>{item.admissionNo}</Td>
                                        <Td>{item.dateofBirth}</Td>
                                        <Td>{item.studentClass}</Td>
                                        <Td>{item.studentDivision}</Td>
                                        <Td>{item.studentgender}</Td>

                                    </Tr>
                                ))}
                            </tbody>
                        </Table>
                    </TableContainer>
                </Box>
                
            </CardBody>
        </Card>
        
    )
}