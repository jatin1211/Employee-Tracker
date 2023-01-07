# Employee-Tracker

## Description
The application provide management for a company employee database.
The command line prompted application has functions like - "view all departments","view all roles",
"view all employees","add a department","add a role","add an employee","update an employee role"
     
## User story
### As a user:
At an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies

### So that:
My company can compete with other e-commerce companies

## Usage Information
* WHEN I start the application,
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
* WHEN I choose to view all departments,
THEN I am presented with a formatted table showing department names and department ids
* WHEN I choose to view all roles,
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
* WHEN I choose to view all employees,
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
* WHEN I choose to add a department,
THEN I am prompted to enter the name of the department and that department is added to the database
* WHEN I choose to add a role,
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
* WHEN I choose to add an employee,
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
* WHEN I choose to update an employee role,
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Technologies used](#technologies-used)
* [License](#license)
* [Contribution](#contribution)
* [Screenshot](#screenshot)
* [Walkthrough video](#walkthrough-video)
* [Questions](#questions)

## Installation
Please clone the repo to your local machine and do `npm i` to download the following packages:
* "dotenv": "^16.0.2",
* "express": "^4.18.1",
* "inquirer": "^8.2.4",
* "mysql2": "^2.3.3"
Then run the application using `node index.js` and inquirer prompts will start.

## Usage
* A user is able to open the `tech blog` application and view existing blogs and comments by other users.
* The user can signup/login to create their own blogs and also comment on other blogs.

## Technologies used
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contribution
- [Jatin Saini](https://github.com/jatin1211)

## Screenshot
### GET ALL
<img src = './images/pic1.JPG' alt = 'image' width = '500' height = '300' style = 'border:3px solid black'>

### GET BY ID
<img src = './images/pic2.JPG' alt = 'image' width = '500' height = '300' style = 'border:3px solid black'>

### POST,PUT AND DELETE
<img src = './images/pic3.JPG' alt = 'image' width = '500' height = '300' style = 'border:3px solid black'>

## Walktrough video
https://drive.google.com/file/d/1H4dTpge3SecmRO0QjhbfICgeZChTgHTV/view

## Questions
Please email me with questions!
* sainijatin247@gmail.com