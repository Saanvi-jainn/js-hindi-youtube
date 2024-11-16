const accountId = 144553
let accountEmail = "saanvi@google.com"
var accountPassword = "12345"
accountCity = "Ghaziabad" //possible, but shouldn't be done
let accountSate;

// accountId = 2 // not allowed

console.log(accountId);

accountEmail = "jain07@google.com"
accountPassword = "212121"
accountCity = "jaipur"

console.table([accountId,accountEmail,accountPassword,accountCity,accountSate])

/* prefer not to use var because of
issue in block scope and functional scope */
