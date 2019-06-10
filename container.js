const { createContainer, asClass } = require('awilix');

const Helper = require('./helper.js');
const Service = require('./service.js');

/**
 * This function receives an object with any other service you want to register
 * or service you want to replace (more on this in the service.test.js file)
 */
const registerContainer = (otherServices = null) => {
  const container = createContainer();
  
  container.register({
    helperInstance: asClass(Helper).singleton(),
    serviceInstance: asClass(Service).classic().singleton(),
    
    ...otherServices,
  });

  return container;
};

module.exports = registerContainer;
