const Engineer = require('../lib/Engineer');

//engineer Name Test 
test('Test input of name', () => {
    const engineer = new Engineer('Dino', 23, 'dinoarslanovic@gmail.com', 'dinoarslanovic26');
    expect(engineer.name).toEqual(expect.any(String));
});

//engineer role test
test('Test input of rol', () => {
    const engineer = new Engineer('Dino', 23, 'dinoarslanovic@gmail.com', 'dinoarslanovic26');
    expect(engineer.getRole()).toEqual("Engineer");
});

//engineer Id test 
test('Test input of ID', () => {
    const engineer = new Engineer('Dino', 23, 'dinoarslanovic@gmail.com', 'dinoarslanovic26');
    expect(engineer.getId()).toEqual(expect.any(Number));
});

//engineer email test
test('Test input of email', () => {
    const engineer = new Engineer('Dino', 23, 'dinoarslanovic@gmail.com', 'dinoarslanovic26');
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

//engineer github test
test('Test input of github', () => {
    const engineer = new Engineer('Dino', 23, 'dinoarslanovic@gmail.com', 'dinoarslanovic26');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
