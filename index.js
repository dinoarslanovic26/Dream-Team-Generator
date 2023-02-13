const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const fs = require('fs'); 
const inquirer = require('inquirer');
const dreamTeamList = []; 
 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 
            
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
           
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
           
        }
    ])

    .then(managerInput => {
    const manager = new Manager(
    managerInput.name,
    managerInput.id,
    managerInput.email,
    managerInput.officeNumber
    );
    dreamTeamList.push(manager);
    console.log(manager);
    });
};

const addEmployee = () => {
    console.log(`Adding employees to the team`);
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",

        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
           
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",

        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Are there any more members you would like to add?',
            default: false
        }
    ])
    
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmEmployee } = employeeData;
        let employee;
        
        switch (role) {
        case "Engineer":
        employee = new Engineer(name, id, email, github);
        console.log(employee);
        break;
        case "Intern":
        employee = new Intern(name, id, email, school);
        console.log(employee);
        break;
        }
        dreamTeamList.push(employee);
        if (confirmEmployee) {
        return addEmployee(dreamTeamList);
        } else {
        return dreamTeamList;
        }
        });
};

addManager()
  .then(addEmployee)
  .then(dreamTeamList => {
    return generateHTML(dreamTeamList);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your Dream Team list has been created!")
        }
    })
}; 