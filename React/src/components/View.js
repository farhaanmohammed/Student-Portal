import React from "react"
import '../Css/View.css'
import { useState,useEffect} from "react";
import axios from "axios";
import {
    Table, Tr,Th,Td,TableContainer,Card,CardBody,CardHeader,Box,Heading,Button,Flex,Spacer,Modal,
    ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,useDisclosure, FormControl, FormLabel,
    useToast,
    Select
    
} from '@chakra-ui/react';
import { baseUrl } from "./Url/baseUrl";


const styles = {
    fontFamily: 'Onest, sans-serif',
    color:'#566262',
};




export default function View({ reload,onFormSubmit }){
    const [students, setStudents] = useState([]);

    const[AdmissionNoList,setAdmissionNoList]=useState([]);

    const[deleteitem,setDeleteItem]=useState('');

    const { isOpen, onOpen, onClose } = useDisclosure();

    const StudentRecordsUrl=`${baseUrl}/getAll`;

    const DeleteStudentUrl=`${baseUrl}/delete/${deleteitem}`;

    const AdmissionNoDropdownUrl=`${baseUrl}/admissionNoDropdown`;

    const toast = useToast()

    function handleDelete(){
        axios.delete(DeleteStudentUrl).then(res=>{
            console.log("delete response",res.data);

            onClose();
            toast({
                title: 'Success',
                description: "Student Record Deleted ",
                status: 'success',
                position: 'top',
                duration: 9000,
                isClosable: true,
                onCloseComplete: (() => {
                    console.log("toast closed");
                })
            });

            onFormSubmit();
        }).catch(err=>{console.log("delete error",err)});
    }




    //useffect to retrieve the student records from database
    useEffect(()=>{
        axios.get(StudentRecordsUrl).then(res=>{
            console.log("respose",res.data)
            setStudents(res.data)
        }).catch(err=>console.log("error",err))

        axios.get(AdmissionNoDropdownUrl).then(res=>{
            setAdmissionNoList(res.data);
        })
    },[reload])

        // console.log("students",students)

        console.log("selected",deleteitem);

    


    return(
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset='scale'>
                <ModalOverlay
                    backdropFilter='blur(10px)'
                />
                <ModalContent style={styles}>
                    <ModalHeader>Delete Record</ModalHeader>
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Select Admission Number</FormLabel>
                            
                                <Select value={deleteitem} onChange={(e)=>{setDeleteItem(e.target.value)}} placeholder="Select Number">
                                    {AdmissionNoList.map((item)=>(
                                        <option key={item.id} value={item.admissionNo}>{item.admissionNo}</option>
                                    ))}
                                </Select>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='red'  mr={3} onClick={handleDelete}>Delete</Button>
                        <Button colorScheme="teal" onClick={onClose}>Go back</Button>
                    </ModalFooter>
                </ModalContent>

            </Modal>
            <Card style={{ ...styles, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} maxWidth={{base:"100%",md:'100%'}}  p={5} >
                <CardHeader>
                    <Flex>
                        <Heading size='2xl' style={styles}>Student Details</Heading>
                        <Spacer/>
                        <Button colorScheme='teal' onClick={onOpen}>Delete Record</Button>
                    </Flex>
                    
                </CardHeader>
                <CardBody>
                    <Box>
                        {students.length===0 ? (
                            
                            <Heading size={'md'} style={styles}>No Records Available</Heading>

                            

                        ):(
                            <TableContainer  p={5} paddingTop={'-10'}  overflowY="auto" maxHeight={"575px"}>
                                <Table size={'lg'}  variant={'simple'}>
                                    
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
        </>
        
    )
}