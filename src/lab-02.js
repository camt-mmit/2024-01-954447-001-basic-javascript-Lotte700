import { stdin, stdout } from 'node:process';
import readline from 'readline';


const rl = readline.createInterface({input: stdin,output: stdout});

rl.question('Input size: ', (input) => {
  const size = parseInt(input);

    for (let i = 1; i <= size; i++) {
      console.log('*'.repeat(i));  
    }

  rl.close();
});

//for (let i = 1; i <= size; i++) {
  //let stars = '';  

  // ใช้ลูปพิมพ์ดาว
  //for (let j = 1; j <= i; j++) {
    //stars += '*';  
  //}


