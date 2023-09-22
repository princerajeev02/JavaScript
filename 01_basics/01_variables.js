const accountId = 144553
let accountEmail = "rajeev@gmai.com"
var accountPassword = "12344"
accountCity = "patna"            
let accountState;

// accountId = 2
accountEmail = "hello@gmail.com"
accountPassword = "222131"
accountCity = "Ranchi"

console.log(accountId);

/*
prefer not to use var 
beacuse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
