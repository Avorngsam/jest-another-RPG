const Potion = require('../lib/Potion.js');

<<<<<<< HEAD
test('creates a health potion object', () => {
    const potion = new Potion('health');
  
    expect(potion.name).toBe('health');
=======
test('creates a random potion object', () => {
    const potion = new Potion();
  
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
>>>>>>> feature/potion
    expect(potion.value).toEqual(expect.any(Number));
  });