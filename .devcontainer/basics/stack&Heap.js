//stack (Primitive), Heap(Non-Premitive)
//Primitive :-7 types of primitive :- string,Number , Boolean , NULL, Undefined , Symbol, BigInt;

//Non-Primitive;- Array , Objects ,Function.
let myYoutubeName = " Nishant"

let anothername = Nishant2
anothername = " Nishant"

console.log(myYoutubeName);
console.log(anothername);

let userOne ={
    email: "abc@gmail.com",
    upi:  "abc@ybl"
}

let userTwo = userOne

userTwo.email = "Nishant@google.com";

console.log(userOne.email);
console.log(userTwo.email);