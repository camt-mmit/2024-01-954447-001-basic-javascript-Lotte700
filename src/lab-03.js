import { stdin, stdout } from 'node:process';
import readline from 'readline';


const rl = readline.createInterface({
  input: stdin,
  output: stdout
});


rl.question('Input size: ', (input) => {
  const size = parseInt(input);

  for (let i = 1; i <= size; i++) {
    let line = ''; 

  
    for (let j = 1; j <= size - i; j++) {
      line += ' ';  
    }


    for (let k = 1; k <= i; k++) {
      line += '*';  
    }


    console.log(line);
  }


  rl.close();
});
