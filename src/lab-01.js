import { stdin, stdout } from 'node:process';
import readline from 'readline';

const rl = readline.createInterface(stdin, stdout);


rl.question('Input score: ', (input) => {

  const score = parseFloat(input);
  if (score >= 80) {
    console.log(`Your grade is A.`);
  } else if (score >= 70) {
    console.log(`Your grade is B.`);
  } else if (score >= 60) {
    console.log(`Your grade is C.`);
  } else if (score >= 50) {
    console.log(`Your grade is D.`);
  } else {
    console.log(`Your grade is F.`);
  }
  rl.close();
});
