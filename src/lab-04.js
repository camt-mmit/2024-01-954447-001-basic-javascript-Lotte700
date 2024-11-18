import { stdin, stdout } from 'node:process';
import readline from 'readline';


const rl = readline.createInterface({
  input: stdin,
  output: stdout
});


rl.question('Input size: ', (input) => {
  const size = parseInt(input);

  let stars = '';
  for (let i = 1; i <= size; i++) {
    stars += '*';  
  }
  console.log(stars);


  for (let i = 1; i < size - 1; i++) {
    let middle = '';
    for (let j = 1; j <= size - 2; j++) {
      middle += ' ';  
    }
    console.log('*' + middle + '*');
  }

  if (size > 1) {
    stars = '';
    for (let i = 1; i <= size; i++) {
      stars += '*';  
    }
    console.log(stars);
  }

  rl.close();
});

