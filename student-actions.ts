import inquirer from 'inquirer';
import chalk from 'chalk';

interface Student {
    name: string;
    id: number;
    courses: string[];
    balance: number;
    status: string;
}

const courses = ['Math', 'Science', 'English', 'History', 'Geography'];

const students: Student[] = [];

function generateId(): number {
    return Math.floor(Math.random() * 100000);
}

export async function addStudent() {
    const answers = await inquirer.prompt([
        {
            name: 'name',
            message: 'Enter student name:'
        }
    ]);

    const student: Student = {
        name: answers.name,
        id: generateId(),
        courses: [],
        balance: 0,
        status: "active"
    };

    students.push(student);
    console.log(chalk.green(student.name + " has been successfully added with ID " + student.id));
}

export async function enrollStudent() {
    const student = await getStudent();
    if (student) {
        const answers = await inquirer.prompt([
            {
                name: "course",
                type: "list",
                choices: courses,
                message: "Select a course:",
            },
        ]);
        student.courses.push(answers.course);
        student.balance += 1000;
        console.log(chalk.green(student.name + " has been successfully enrolled in " + answers.course + ". Total amount payable is " + student.balance));
    } else {
        console.log(chalk.red("Student not found!"));
    }
}

export async function viewBalance() {
    const student = await getStudent();
    if (student) {
        console.log(chalk.green(student.name + " has a balance of " + student.balance));
    } else {
        console.log(chalk.red("Student not found!"));
    }
}

export async function payTuition() {
    const student = await getStudent();

    if (student) {
        console.log(chalk.green(student.name + " has payble tuition of " + student.balance));
        const { amount } = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter amount to be paid:",
                validate: (input) => {
                    if (isNaN(input)) {
                        return "Please enter a valid number";
                    } else if (input < 0) {
                        return "Payment must be greater than 0";
                    }
                    return true;
                },
            }])
        if (amount > student.balance) {
            console.log(chalk.red(student.name + " has successfully paid " + student.balance));
            console.log(chalk.red(`${student.name}, here is your change of  + ${amount - student.balance}`));
            student.balance = 0;
        } else if (amount < student.balance) {
            console.log(chalk.green(student.name + " has successfully paid " + amount));
            console.log(chalk.green(student.name + `, your remaining fees payable is  + ${student.balance - amount}. Please pay at the earliest.`));
            student.balance -= amount;
        } else {
            student.balance -= amount;
            console.log(chalk.green(student.name + " has been successfully paid " + amount));
        }
    } else {
        console.log(chalk.red("Student not found!"));
    }

}

export async function showStatus() {
    const student = await getStudent();
    if (student) {
        console.log(chalk.green(student.name + "'s status is " + student.status));
    } else {
        console.log(chalk.red("Student not found!"));
    }
}

export async function viewAllStudents() {
    if (students.length > 0) {
        console.table(students);
    } else {
        console.log(chalk.red("No students found!"));
    }
}

async function getStudent() {
    const answers = await inquirer.prompt([
        {
            name: "studentId",
            type: "number",
            validate: (input) => {
                if (isNaN(input)) {
                    return "Please enter a valid number";
                }
                return true;
            },
        },
    ]);
    const student: Student | undefined = students.find(
        (student) => student.id === Number(answers.studentId)
    );

    return student
}    