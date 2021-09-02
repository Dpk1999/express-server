
const createEquilateral = (size) => {

   for (let indexOne = 1; indexOne <= size; indexOne++) {
      for (let indexTwo = size - 1; indexTwo >= indexOne; indexTwo--) {
         process.stdout.write(" ");
      }
      for (let indexThree = 1; indexThree <= indexOne; indexThree++) {
         process.stdout.write("* ")
      }
      console.log();
   }
}
const size = process.argv.slice(2);


export default equilateral;

createEquilateral(size);

export default createEquilateral;

