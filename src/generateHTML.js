//manager card
const generateManager = function (manager) {
    return `
            <div class="card-header">
                <h3>Manager</h3>
                <h4>${manager.name}</h4>
            </div>

            <ul class="card-body">
                <li class="id">ID: ${manager.id}</li>
                <li class="email">Email: <a href="mailto: ${manager.email} "> ${manager.email} </a></li>
                <li class="office">Office Number: ${manager.officeNumber} </li>
            </ul>
    `;
}

//engineer card
const generateEngineer = function (engineer) {
    return `
            <div class="card-header">
                <h3>Engineer</h3>
                <h4>${engineer.name}</h4>
            </div>

            <ul class="card-body">
                <li class="id">ID: ${engineer.id}</li>
                <li class="email">Email: <a href="mailto: ${engineer.email} "> ${engineer.email} </a></li>
                <li class="github">Github: <a href="https://github.com/${engineer.github}"> ${engineer.github} </a></li>
            </ul>
    `
}

//intern card 
const generateIntern = function (intern) {
    return `
            <div class="card-header">
                <h3>Intern</h3>
                <h4>${intern.name}</h4>
            </div>

            <ul class="card-body">
                <li class="id">ID: ${intern.id}</li>
                <li class="email">Email: <a href="mailto:${intern.email}"> ${intern.email} </a></li>
                <li class="school">School: ${intern.school} </li>
            </ul>
    `
};

generateHTML = (data) => {
    let pageList = []; 

    for (const employee of data) {
        let employeeCard;
        switch (employee.getRole()) {
            case 'Manager':
                employeeCard = generateManager(employee);
                break;
            case 'Engineer':
                employeeCard = generateEngineer(employee);
                break;
            case 'Intern':
                employeeCard = generateIntern(employee);
                break;
        }
        pageList.push(employeeCard);
    }

    const employeeCards = pageList.join('');
    return generateDreamTeam(`${employeeCards}`);
};

const generateDreamTeam = function (employees) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dream Team</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar" id="navbar-text">The Dream Team</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center">
                  ${employees}
              </div>
          </div>
      </main>
      
  </body>
  </html>


`;
}

module.exports = generateHTML; 
