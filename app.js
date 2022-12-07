console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 0; i < 100; i ++){
    if(i % 2 == 0){
        continue;
    }
    else{
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 0; i < 100; i++){
    console.log(i);

    if(i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    } else {
        if(i % 3 == 0){
            console.log("FIZZ");
        }

        if(i % 5 == 0){
            console.log("BUZZ");
        }
    }
}
// Exercise 3
console.log("EXERCISE 3:\n==========\n");
let i = 1;
while(i <= 100){
    if(i % 2 == 0){
        continue;
    }
    else{
        console.log(i);
    }
    i++;
}

while(i <= 100){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    } else {
        if(i % 3 == 0){
            console.log("FIZZ");
        }

        if(i % 5 == 0){
            console.log("BUZZ");
        }
    }
    i++;
}
// EXERCISE 4
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for(let i = 1; i <= n; i++){
    if(i == value){
        console.log("Found Value!");
        break;
    }
    console.log("Did not find value.")
}
//EXERCISE 5
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let number = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <= encodeURI; i++){
    let output = "";

    if(i % fizzDivisor == 0){
        output += "FIZZ";
    }
    if(i % buzzDivisor == 0){
        output += "BUZZ";
    }
    console.log(`${i} ${output}`);
}

