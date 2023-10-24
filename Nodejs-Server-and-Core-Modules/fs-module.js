const fs = require("fs");

// write file and appen text 
fs.writeFileSync("hello.txt", "hello programmers ");
fs.appendFileSync("hello.txt", "how are you ?");

// file read file sync
const data = fs.readFileSync("hello.txt");
console.log(data.toString());

// without sync
fs.readFile('hello.txt', (err, data)=>{
    console.log(data.toString())
})

console.log('eta print hobe sync ar aage. thats means it work async onuzati kaz korese ');