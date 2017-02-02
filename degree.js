const Matrix = require("matrix-js");

let A = Matrix([
    [1,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,1],
    [0,0,0,1,0]
]);
//Code here
function degree(mtrx,v){
  let sum = 0;
  let degreelist = mtrx(v-1);
  for(var a=0;a<degreelist.length;a++){
    sum += (degreelist[a]);
  }
  return sum;
}

function degreecentrality(mtrx,v){
  let neighbors = mtrx.size().pop()-1;
  return degree(mtrx,v) / neighbors;
}

//Challenge

//Run test code with ctrl+shift+p  then type in "script"
console.log(degree(A,3));
console.log(degreecentrality(A,2));
