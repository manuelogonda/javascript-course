function isLeapyear(num){
 if(num % 400 === 0){
   return `${num} is a leap year`;
 }else if(num % 100 === 0){
     return `${num} is not a leap year`;
 }else if(num % 4 === 0){
   return `${num} is a leap year`;
 }else{
    return `${num} is not a leap year`;
 }
}
const year = 2004;
const result = isLeapyear(year);
console.log(result);