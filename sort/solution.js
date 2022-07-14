function solution(numbers) {

  numbers.sort(function(a,b) {
    let A = String(a);
    let B = String(b);
    return (B + A) - (A + B);
  });

  if (numbers[0] === 0) return "0";
  
  let str = "";

  for (let num of numbers) {
    str += String(num);
  }

  return str;
}
