const registerContainer = require('./container.js');

const container = registerContainer();
const service = container.resolve('serviceInstance');

// Here the output will be 'helper', since we didn't
// replace anything with our registerContainer function
console.log('helper name is:', service.getHelperName());
