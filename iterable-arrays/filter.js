let num = [2,5,6,20,33,44,67,78];
let filtered = num.filter((x, index, array)=>{
    return x % 2 == 0;
});
console.log(filtered);


let names = ['seyi', 'femi', 'victoria', 'ryan', 'galavant'];
let fil = names.filter((x)=>{
  return x.length > 7;
});
console.log(fil);


let nay = [
  {name:'seyi', score: 50, subject: 'maths'},
  {name: 'femi', score: 70, subject: 'english'}, 
  {name:'victoria', score: 79, subject: 'maths'},
  {name:'ryan', score: 94, subject: 'english'},
  {name:'galavant', score: 65, subject: 'maths'},
];
let pass = nay.filter((x)=>{
  return x.score > 73 & x.subject == 'english'; 
});
console.log(pass);