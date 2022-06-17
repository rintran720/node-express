'use strict';

const autocannon = require('autocannon');

// async/await
async function foo() {
  const result = await autocannon({
    url: 'http://localhost:12111',
    connections: 10, //default
    pipelining: 1, // default
    duration: 10, // default
  });
  console.log(result);
}

foo();
