## Awilix-Example

This project show how you can replace "services/modules" using DI with awilix.

To run this project, make shure you have at least node 8 installed.

### Setup

Clone this repo, then install dependencies:

```bash
npm i
```

### Running

This would be the normal execution, without replace any module.
Check `index.js` and `container.js` file to see how the app setup and execution is made.

```
node index.js
```

### Testing

On the `service.test.js` you can see how module replacement it's done.

You can run to check the results:

```bash
npm test
```
