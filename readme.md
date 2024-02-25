## NodeJS/TypeScript Student Management System

### Cloud Applied Project Generative AI Engineer (Batch 53 Quarter 1)

This project is a simple console based Student Management System. It allows you to manage students by adding, enrolling, viewing details, paying fees etc.

### Run the app
To start the app, run the following commands in terminal where proper node and typescript is installed:

```bash
git clone https://github.com/docsj1980/sj-student-management-system.git
npm install
tsc && node index
```

### Files
There are two main files:

`index.ts` - Contains the main menu and flow of the app
`student-actions.ts` - Contains the functions for different student actions

### Adding a new student
To add a new student, select Add new student from the main menu.

It will prompt you to enter the student name.

A new student object will be created with the given name and a randomly generated 5 digit ID. The student will be added to the students array.

```bash
Select an action: 
> Add new student

Enter student name: John Doe 

// John Doe added with id 12345 
```


### View all students
To view details of all added students, select View all students from the main menu.

It will display a table with name, id, courses and balance for all students.

```bash
Select an action:
> View all students

NAME    ID      COURSES           BALANCE
John    12345                        0
Jane    67890   [Math, Science]   2000  
```


### Enroll student in course
To enroll a student in a course, select Enroll student in course from the main menu.

It will first ask for the student ID to select a student.

Then it will show a list of courses to choose from.

Once selected, the course will be added to the student's courses array.

The tuition fee (1000) will also be added to student's balance.

```bash
Select an action:
> Enroll student in course 

Enter studentId: 12345

Select a course:
> Science
John has been successfully enrolled in Science. Total amount payable is 1000.
```

### View balance
To check the total payable balance for a student, select View balance from the main menu.

It will prompt for student ID and display the total balance.

```bash
Select an action: 
> View balance

Enter studentId: 12345

John has a balance of 1000
```

### Pay tuition
To pay fees for a student, select Pay tuition from the main menu.

It will ask for student ID, then ask you to enter the amount to pay.

Based on the amount, it will update the student's balance accordingly.
```bash
Select an action:
> Pay tuition

Enter studentId: 12345 

John has payble tuition of 1000
Enter amount to be paid: 500

John has successfully paid 500. Your remaining fees payable is 500. Please pay at the earliest.
```

### Show status
To view full details of a student, select Show status from the main menu.

It will display name, id, courses enrolled and balance for the student.
```bash
Select an action:
> Show status

Enter studentId: 12345

John's status is:
{
  name: 'John',
  id: 12345,
  courses: ['Science'],
  balance: 500,
  status: 'active' 
}
```

It will show the main menu to choose different actions.

Select actions as needed to manage students.

Choose Quit to exit the app.