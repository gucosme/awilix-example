class Service {
  constructor(helperInstance) {
    this.helper = helperInstance;
  }

  getHelperName() {
    return this.helper.name;
  }
}

module.exports = Service;
