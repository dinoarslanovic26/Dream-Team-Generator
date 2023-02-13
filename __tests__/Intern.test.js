const Intern = require('../lib/Intern');

//Employee name test  
test('Test input of name', () => {
    const intern = new Intern('Dino', 23, 'dinoarslanovic@gmail.com', 'dinoarslanovic26');
    expect(intern.name).toEqual(expect.any(String));
});

//Employee ID test
test('Test input of ID', () => {
    const intern = new Intern('Dino', 23, 'dinoarslanovic@gmail.com', 'dinoarslanovic26');
    expect(intern.getId()).toEqual(expect.any(Number));
});

//Employee Email test
test('Test input of email', () => {
    const intern = new Intern('Dino', 23, 'dinoarslanovic@gmail.com', 'ISU');
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});

//Employee school test
test('gets employee school', () => {
    const intern = new Intern('Dino', 23, 'dinoarslanovic@gmail.com', 'ISU');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//Employee role test
test('gets role of employee', () => {
    const intern = new Intern('Dino', 23, 'dinoarslanovic@gmail.com', 'ISU');
    expect(intern.getRole()).toEqual("Intern");
}); 