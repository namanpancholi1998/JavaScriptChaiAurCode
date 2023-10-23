const accountId = 144553; // can't be re-assinged a value and can't declared again (Block Scope).
let accountEmail = "naman@google.com"; // can't be re-assinged a value but can't declared again (Block Scope).
var accountPassword = "12345"; //it can be re-assinged a value and it can also be declared again (Global Scope).
accountCity = "Ajmer"; // we can assing value like this but not use this.
let accountState; // we can assing vlue like this. it output come => undefined.

// accountId = 2; // not allowed for const variable.


accountEmail = "np@gmail.com"; // updated value for let.
accountPassword = "21212121"; // updated value for var.
accountCity = "Bengaluru"; // updated va;ue for this also.

// print statement for printing accountId.
console.log(accountId); 

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// print statement for printing group of variable in tabular form.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);