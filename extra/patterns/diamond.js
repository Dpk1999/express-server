 createDimondShape=(size)=>{
  for(var a=1;a<=size;a++){
     for(var b=size-1;b>=a;b--){
        process.stdout.write(" ");
     }
     for(var c=1;c<=a;c++){
        process.stdout.write("* ")
     }
     console.log();
  }
  if(a==size+1){
     for(var a=1;a<=size-1;a++){
        for(var b=1;b<=a;b++){
           process.stdout.write(" ");
        }
        for(c=a;c<=size-1;c++){
           process.stdout.write("* ");
        }
        console.log();
     }
  }
}
const size = process.argv.slice(2);
createDimondShape(Number(size));





