const fspromises = require('fs').promises;
const path  = require ('path');

const files = async () => {
try{
let data = await fspromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8');
data = Number(data);

  data += 1;
  console.log(typeof data);
 
  
  console.log(data);
await fspromises.writeFile(path.join(__dirname, 'starter.txt'), data);
console.log(typeof data);
}catch(err){
console.error(err);
}
}

files();




