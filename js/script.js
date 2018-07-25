function recFunc (a) {
  if (a > 0) {
    console.log( a );
   return recFunc (a-1);
  }
}
recFunc(10);

var teXt = "conversely:";
console.log(teXt);


function recFunc2 (b) {
  if (b <= 10) {
    console.log( b );
   return recFunc2 (b+1);
  }
}
recFunc2(1);