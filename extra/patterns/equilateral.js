 createEquilateral=(size)=>{
   for(let a=1;a<=size;a++){
       for(let b=size-1;b>=a;b--){
          process.stdout.write(" ");
       }
       for(let c=1;c<=a;c++){
          process.stdout.write("* ")
       }
       console.log();
    }
} 
const size = process.argv.slice(2);
createEquilateral(size);