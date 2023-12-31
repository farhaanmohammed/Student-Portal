import React from "react";
import { useState } from "react";
import '../Css/Addform.css'
import axios from "axios";
import { baseUrl } from "./Url/baseUrl";
import { Form,redirect } from "react-router-dom";
import {  Button, FormControl, FormLabel, Input,Select,Radio, RadioGroup,Stack,useToast,
        Card,CardBody,CardHeader,Heading  } from "@chakra-ui/react";

        const styles = {
            fontFamily: 'Onest, sans-serif',
            color:'#566262',
        };


export default function Addform({ onFormSubmit }){

    
    const[formData,setFormData]=useState({name:'',date_of_birth:'', class:'',division:'',gender:'Male'});

    const AddformUrl=`${baseUrl}/save`




    const today = new Date().toISOString().split('T')[0]; 



    
    

    const toast = useToast()


    //function to set the values in formdata
    const handleChange = (event) => {
        
        const { name, value } = event.target;
        console.log(name,value)
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));


            
        
    };
    

    //function to handle submit
    const handleSubmit = (event) => {
        event.preventDefault();

        const body = {
            "studentName": formData.name,
            "dateofBirth": formData.date_of_birth,
            "studentClass": formData.class,
            "studentDivision": formData.division,
            "studentgender": formData.gender,
        };

        console.log(body);


        axios.post(AddformUrl,body).then(res=>{
            console.log(res.data);
            redirect('/');
            
            toast({
                title: 'Success',
                description: "Student is added ",
                status: 'success',
                position: 'top',
                duration: 9000,
                isClosable: true,
                onCloseComplete: (() => {
                    console.log("toast closed");
                })
            });

            onFormSubmit();

        }).catch(err=>console.log(err));

    };



    return(
        <Card  boxSize={{ base: "100%", md: "100%" }} maxWidth={"100%"} style={{ ...styles, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} p={5}>
            <CardHeader>
                <Heading size='2xl' style={styles} fontWeight={'bold'}>Add Student</Heading>
            </CardHeader>
            <CardBody>
                <Form onSubmit={handleSubmit} method="post">
                    <FormControl   isRequired>
                        <FormLabel fontSize={{ base: "md", lg: "lg" }} fontWeight={'semibold'}>Enter Name:</FormLabel>
                        <Input type="text" id="name" name="name" value={formData.name}  onChange={handleChange} marginBottom={"10px"}/>
                        
                    </FormControl>

                    <FormControl   isRequired>
                        <FormLabel fontSize={{ base: "md", lg: "lg" }} fontWeight={'semibold'}>Date Of Birth</FormLabel>
                        <Input type="date" id="date_of_birth" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} isReadOnly={false} max={today} marginBottom={"10px"}/>
                        
                    </FormControl>
                    
                    <FormControl  isRequired>
                        <FormLabel fontSize={{ base: "md", lg: "lg" }} fontWeight={'semibold'}>Class</FormLabel>
                        <Select value={formData.class} name="class" id="class" onChange={handleChange} placeholder="Select Class" marginBottom={"10px"}>
                            <option value="I">I</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                            <option value="V">V</option>
                            <option value="VI">VI</option>
                            <option value="VII">VII</option>
                            <option value="VIII">VIII</option>
                            <option value="IX">IX</option>
                            <option value="X">X</option>
                            <option value="X11">X11</option>
                            <option value="X12">X12</option>
                        </Select>
                    
                    </FormControl>
                    <FormControl  isRequired>
                        <FormLabel fontSize={{ base: "md", lg: "lg" }} fontWeight={'semibold'}>Division:</FormLabel>
                        <Select value={formData.division} name="division" id="division" onChange={handleChange}placeholder="Select Division" marginBottom={"10px"}>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </Select>
                        
                    </FormControl>

                    <FormControl  marginBottom={"110px"}>
                            <FormLabel fontSize={{ base: "md", lg: "lg" }} fontWeight={'semibold'}>Select Gender</FormLabel >
                            <RadioGroup defaultValue='Male'>
                            <Stack spacing={5} direction='row'>
                                <Radio colorScheme='teal' id="male" name="gender" value='Male' isChecked={formData.gender === 'Male'} onChange={handleChange}>
                                    Male
                                </Radio>
                                <Radio colorScheme='teal' id="female" name="gender" value='Female' isChecked={formData.gender === 'Female'} onChange={handleChange}>
                                    Female
                                </Radio>
                            </Stack>
                            </RadioGroup>

                    </FormControl>

                    <Button type="submit"  colorScheme='teal' size={"lg"} width={"100%"} >Submit</Button>
                    
                    
                </Form>

            </CardBody>
        </Card>
        
    )
}



