const createDimondShape = (size) => {
   for (let indexOne = 1; indexOne <= size; indexOne++) {
      for (let indexTwo = size - 1; indexTwo >= indexOne; indexTwo--) {
         process.stdout.write(" ");
      }
      for (let indexThree = 1; indexThree <= indexOne; indexThree++) {
         process.stdout.write("* ")
      }
      console.log();
   }
   
      for (let indexOne = 1; indexOne <= size - 1; indexOne++) {
         for (let indexTwo = 1; indexTwo <= indexOne; indexTwo++) {
            process.stdout.write(" ");
         }
         for (indexThree = indexOne; indexThree <= size - 1; indexThree++) {
            process.stdout.write("* ");
         }
         console.log();
      }
   
}
const size = process.argv.slice(2);
createDimondShape(Number(size));


//export default createDimondShape;


