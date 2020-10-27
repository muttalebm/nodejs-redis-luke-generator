# Redis Luke generator
## A simple function to create Redis Luke files

## Installation
```npm install redis-luke-generator```
## Usage
This package exports a function named generate. 
```javascript
const generator= require('redis-luke-generator');

let luke_command=generator.generate(["SET", "foo", "bar"]); // need to pass the command in array format

console.log(luke_command);

// *3\r\n$3\r\nSET\r\n$3\r\nfoo\r\n$3\r\nbar

```
