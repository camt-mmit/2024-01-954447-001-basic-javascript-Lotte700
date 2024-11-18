import { stdin, stdout } from 'node:process';
import readline from 'readline';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

rl.question('Input size: ', (input) => {
  const size = parseInt(input);
//ครึ่งบน
  for (let i = 1; i <= size; i++) {
    let line = ''; 

    for (let j = 1; j <= size - i; j++) {
      line += ' ';  
    }
    line += '*';

    if (i !== 1) {
      for (let k = 1; k <= 2 * (i - 1) - 1; k++) {
        line += ' ';  
      }
      line += '*';
    }
    console.log(line);  
  }
//ครึ่งล่าง
  for (let i = size - 1; i >= 1; i--) {
    let line = ''; 
   
    for (let j = 1; j <= size - i; j++) {
      line += ' ';  
    }
    line += '*';

    if (i !== 1) {
      for (let k = 1; k <= 2 * (i - 1) - 1; k++) {
        line += ' ';  
      }
      line += '*';
    }

    console.log(line); 
  }
  rl.close();
});
