const createDimondShape = (size) => {
   for (var indexOne = 1; indexOne <= size; indexOne++) {
      for (var indexTwo = size - 1; indexTwo >= indexOne; indexTwo--) {
         process.stdout.write(" ");
      }
      for (var indexThree = 1; indexThree <= indexOne; indexThree++) {
         process.stdout.write("* ")
      }
      console.log();
   }
   if (indexOne == size + 1) {
      for (var indexOne = 1; indexOne <= size - 1; indexOne++) {
         for (var indexTwo = 1; indexTwo <= indexOne; indexTwo++) {
            process.stdout.write(" ");
         }
         for (indexThree = indexOne; indexThree <= size - 1; indexThree++) {
            process.stdout.write("* ");
         }
         console.log();
      }
   }
}
const size = process.argv.slice(2);
createDimondShape(Number(size));





