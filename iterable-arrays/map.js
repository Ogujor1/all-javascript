let arr = [2,4,6,8,10]
let newArr = arr.map(function(item){
  return item/2
})
console.log(newArr)


let arr1 = [4,6,8,10,10]
let newArr1 = arr1.map(function(item, index){
  return item/index
})
console.log(newArr1)


let ar2 = arr.map((item, index) => item * index);
console.log(ar2);


let ar3 = arr.map(function(item, index, array){
  console.log (array); 
  return (item*2)/ index;
});
console.log(ar3);


let profile = [
  {name: 'buhari', status: 'naija president'},
  {name: 'obama', status: 'us president'}
];
let newProf = profile.map((item, index, array) =>{
  return item.status
});
console.log(newProf);
  



