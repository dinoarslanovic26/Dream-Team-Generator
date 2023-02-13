const Employee = require('../lib/Employee');

//Emplyee bane test
test('Test input of name', () => {
    const employee = new Employee('Dino', 23, 'dinoarslanovic@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
});

//Employee Id test 
test('Test input of ID', () => {
    const employee = new Employee('Dino', 23, 'dinoarslanovic@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

//Employee email test
test('Test input of email', () => {
    const employee = new Employee('Dino', 23, 'dinoarslanovic@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//Employee role test
test('Test input of employee', () => {
    const employee = new Employee('Dino', 23, 'dinoarslanovic@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
}); 
