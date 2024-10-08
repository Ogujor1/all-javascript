// SOME RETURNS BOOLEAN VALUES

let num = [2,5,6,20,33,44,67,78];
let numEven = num.some((x) => {
  if (x % 2 == 1){
    return x;
  };
});
console.log(numEven);


let check = num.some((x) => x < 2);
console.log(check)