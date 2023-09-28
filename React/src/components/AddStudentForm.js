import React from "react";
import { useState } from "react";
import '../Css/Addform.css'
import axios from "axios";
import { Form,redirect } from "react-router-dom";
import {  Button, FormControl, FormLabel, Input,Select,Radio, RadioGroup,Stack,useToast,FormErrorMessage,
        Card,CardBody,CardHeader,Heading  } from "@chakra-ui/react";

        const styles = {
            fontFamily: 'Onest, sans-serif',
            color:'#566262',
        };


export default function Addform({ onFormSubmit }){

    
    const[formData,setFormData]=useState({first_name:'',last_name:'',date_of_birth:'', class:'',division:'',gender:'Male'});
    const [errors, setErrors] = useState({});
    

    const toast = useToast()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));


            setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
        
    };


    const handleSubmit = (event) => {
        event.preventDefault();

    
        

        // Validate the form
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const body = {
            "studentName": formData.first_name + " " + formData.last_name,
            "dateofBirth": formData.date_of_birth,
            "studentClass": formData.class,
            "studentDivision": formData.division,
            "studentgender": formData.gender,
        };

        console.log(body);


        axios.post("http://localhost:8080/api/v1/student/save",body).then(res=>{
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

    const validateForm = () => {
        const errors = {};
        if (!formData.first_name) {
            errors.first_name = 'First Name is required';
        }
        if (!formData.last_name) {
            errors.last_name = 'Last Name is required';
        }
        if (!formData.date_of_birth) {
            errors.date_of_birth = 'Date of Birth is required';
        }
        if (!formData.class) {
            errors.class = 'Class is required';
        }
        if (!formData.division) {
            errors.division = 'Division is required';
        }
        return errors;
    };

    return(
        <Card  boxSize={{ base: "100%", md: "100%" }} maxWidth={"100%"} style={{ ...styles, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardHeader>
                <Heading size='2xl' style={styles} fontWeight={'bold'}>Add Student</Heading>
            </CardHeader>
            <CardBody>
                <Form onSubmit={handleSubmit} method="post">
                    <FormControl  isInvalid={!!errors.first_name} isRequired>
                        <FormLabel fontSize={{ base: "md", lg: "lg" }} fontWeight={'semibold'}>Enter First Name:</FormLabel>
                        <Input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange}/>
                        <FormErrorMessage>{errors.first_name}</FormErrorMessage>
                    </FormControl>

                    <FormControl  isInvalid={!!errors.last_name} isRequired>
                        <FormLabel fontSize={{ base: "md", lg: "lg" }} fontWeight={'semibold'}>Enter Last Name:</FormLabel>
                        <Input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange}/>
                        <FormErrorMessage>{errors.last_name}</FormErrorMessage>
                    </FormControl>
                    <FormControl  isInvalid={!!errors.date_of_birth} isRequired>
                        <FormLabel fontSize={{ base: "md", lg: "lg" }} fontWeight={'semibold'}>Date Of Birth</FormLabel>
                        <Input type="date" id="date_of_birth" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange}/>
                        <FormErrorMessage>{errors.date_of_birth}</FormErrorMessage>
                    </FormControl>
                    
                    <FormControl isInvalid={!!errors.class} isRequired>
                        <FormLabel fontSize={{ base: "md", lg: "lg" }} fontWeight={'semibold'}>Class</FormLabel>
                        <Select value={formData.class} name="class" id="class" onChange={handleChange} placeholder="Select Class">
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
                            <option value="XI">XI</option>
                            <option value="XII">XII</option>
                        </Select>
                    <FormErrorMessage>{errors.class}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.division} isRequired>
                        <FormLabel fontSize={{ base: "md", lg: "lg" }} fontWeight={'semibold'}>Division:</FormLabel>
                        <Select value={formData.division} name="division" id="division" onChange={handleChange}placeholder="Select Division">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="A">C</option>
                            <option value="D">D</option>
                        </Select>
                        <FormErrorMessage>{errors.division}</FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired marginBottom={"70px"}>
                            <FormLabel fontSize={{ base: "md", lg: "lg" }} fontWeight={'semibold'}>Select Gender</FormLabel >
                            <RadioGroup defaultValue='Male' onChange={(value) => setFormData((prevFormData) => ({ ...prevFormData, gender: value }))}>
                            <Stack spacing={5} direction='row'>
                                <Radio colorScheme='teal' id="male" name="radio" value='Male' isChecked={formData.gender === 'Male'}>
                                    Male
                                </Radio>
                                <Radio colorScheme='teal' id="female" name="radio" value='Female' isChecked={formData.gender === 'Female'}>
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



