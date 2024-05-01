
console.log("Welcome to Holberton School, what is your name?\n");

process.stdin.on('readable', ()=>{
    var chunk_of_data = process.stdin.read();
    if (chunk_of_data !== null){
        process.stdout.write(`Your name is: ${chunk_of_data}`)
    }
});

process.stdin.on('end', () => {
    console.log("This important software is now closing");
});
