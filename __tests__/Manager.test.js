const Manager = require('../lib/Manager');

//Manager name test
test('Test input of name', () => {
    const manager = new Manager('Dino', 23, 'dinoarslanovic@gmail.com', 1);
    expect(manager.name).toEqual(expect.any(String));
});

//Manager Id test 
test('Test input of ID', () => {
    const manager = new Manager('Dino', 23, 'dinoarslanovic@gmail.com');
    expect(manager.getId()).toEqual(expect.any(Number));
});

//Manager email test
test('Test input of email', () => {
    const manager = new Manager('Dino', 23, 'dinoarslanovic@gmail.com');
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});

//Test manager office number 
test('Test input of Office Number', () => {
    const manager = new Manager('Dino', 23, 'dinoarslanovic@gmail.com', 1);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Dino', 23, 'dinoarslanovic@gmail.com');
    expect(manager.getRole()).toEqual("Manager");
}); 