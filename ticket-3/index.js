function countNumberOfNinesInNumber(number) {
  number = number.toString();
  
  let count = 0;

  for (let i = 0; i < number.length; i++) {
   const  digit = number[i];
    if (digit === "9") {
      count++;
    }
  
  }

  return count;
}
console.log(countNumberOfNinesInNumber(9))