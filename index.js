
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if(!(fromN > toN)){
    if (fromN == toN) {
      return fromN;
    } else {
      let  num = fromN;
    return( fromN +  sum( fromN + 1 , toN) )
    }
  }
}

console.log(  sum(3,7)  );



// sum(6,7) = 6 + sum(6+1 , 7)
         // = 6 + 7

module.exports = sum;


// 3 + 4 + 5 + 6 + 7
//
