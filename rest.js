function sumAll(a, ...rest){
  const value = rest.reduce((a,b) =>{
    if (typeof value != 'number') throw new Error("Must be a Number");
      return  a + b;
  }, 0);
  // if (typeof a != 'number') return("Must be a Number");
  return a + value;
  
};
let s = [7,5,8,9,10];
console.log(sumAll(s));