# Redis Luke generator
A simple function to create Redis Luke files


[![Build Status](https://travis-ci.org/muttalebm/nodejs-redis-luke-generator.svg?branch=main)](https://travis-ci.org/muttalebm/nodejs-redis-luke-generator)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=muttalebm_nodejs-redis-luke-generator&metric=alert_status)](https://sonarcloud.io/dashboard?id=muttalebm_nodejs-redis-luke-generator)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=muttalebm_nodejs-redis-luke-generator&metric=security_rating)](https://sonarcloud.io/dashboard?id=muttalebm_nodejs-redis-luke-generator)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=muttalebm_nodejs-redis-luke-generator&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=muttalebm_nodejs-redis-luke-generator)


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
