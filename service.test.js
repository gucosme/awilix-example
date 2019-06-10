const { asClass } = require('awilix');
const registerContainer = require('./container.js');

class HelperMock {
  constructor() {
    this.name = 'helperMock';
  }
}

let container = null;

beforeAll(() => {
  container = registerContainer({
    // here we're totally replace helperInstance that is defined
    // in the container.js file
    helperInstance: asClass(HelperMock).singleton(),
  });
});

test('should return mock name', () => {
  const service = container.resolve('serviceInstance');

  expect(service.getHelperName()).toBe('helperMock');
});
