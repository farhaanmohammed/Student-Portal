
# Student Portal

This is a web application called "Student Portal" that allows users to manage student records. The application is built using React.js for the frontend, MongoDB for the database, and Spring Boot for the backend.


## Features

- Add student details through a form.
- View student records in a tabular format.
- Utilizes a GET API to retrieve student records.
- Utilizes a POST API to add student records.
## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- MongoDB: A popular NoSQL database.
- Spring Boot: A Java-based framework for building web applications.
## Setup Instructions

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/farhaanmohammed/Mozanta-Project.git
    cd student-portal
2. **Backend Setup (Spring Boot):**
  
   - Project: Maven
   - Spring Boot Version: 3.1.4
   - Packaging: JAR
   - Java Version: 17
   - Open the Spring Boot project in your preferred IDE.
   - Configure the MongoDB connection details in the application.properties file.
   - Run the Spring Boot application to start the backend server.

3. **Frontend Setup(React.js):**
   - Navigate to the frontend directory.
   - Install the dependencies using npm or yarn:
        ```bash
        npm start
     

   - Start the React.js application:
        ```bash
        npm start
    
   - Access the application in your browser at http://localhost:3000.




    

## API Endpoints

- **GET Student Records:**

    - Endpoint: /api/v1/student/getAll
    - Description: Retrieve all student records.    
- **POST Student Record:**
    - Endpoint: /api/v1/student/save
    - Description: Add a new student record.

## Dependencies
- Spring Web
- Spring Data MongoDB

## MongoDB Version
- MongoDB Community Server Version: 7.0.2
- MongoDB Installation: MongoDB Community Server Installation
