/*
Student Management System
This project is a simple console based Student Management System. In this project you will be learning how to add new students, how to generate a 5 digit unique studentID for each student, how to enroll students in the given courses. Also, you will be implementing the following operations enroll, view balance, pay tuition fees, show status, etc. The status will show all the details of the student including name, id, courses enrolled and balance.This is one of the best projects to implement the Object Oriented Programming concepts.

Create a GitHub repository for the project and submit its URL in the project submission form.
*/

import inquirer from 'inquirer';
import { addStudent, enrollStudent, viewBalance, payTuition, showStatus, viewAllStudents } from './student-actions.js'

async function main() {
    let running = true;

    while (running) {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Select an action',
                choices: [
                    'Add new student',
                    'View all students',
                    'Enroll student in course',
                    'View balance',
                    'Pay tuition',
                    'Show status',
                    'Quit'
                ]
            }
        ]);

        switch (answers.action) {
            case 'Add new student':
                await addStudent();
                break;
            case 'View all students':
                await viewAllStudents();
                break;
            case 'Enroll student in course':
                await enrollStudent();
                break;
            case 'View balance':
                await viewBalance();
                break;
            case 'Pay tuition':
                await payTuition();
                break;
            case 'Show status':
                await showStatus();
                break;
            case 'Quit':
                running = false;
                break;
        }
    }
}

main();
