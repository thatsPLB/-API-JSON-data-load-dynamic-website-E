const user = {id: 1, name: 'gahaasd', job: 'bekar'}
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);  
const user2 = JSON.parse(stringified)
console.log(user2);