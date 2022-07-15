function solution(numbers) {
  let answer = 0;
  let ch_arr = [] ;

  for (let i = 0 ; i < numbers.length ; i++) {
    ch_arr.push(numbers[i]);
  }

  let permutations = new Set();
  for (let i = 1 ; i <= numbers.length ; i++) {
    let perm = getPermutations(ch_arr, i);
    perm.forEach( item => {
      permutations.add(Number(buildStr(item)));
    })
  }

  permutations.forEach( item => {
    if (isPrime(item)) answer += 1;
  })

  
  return answer;
}

const getPermutations = function(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach( (fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
}

const buildStr = function(arr) {
  let str = "";
  arr.forEach( element => {
    str += element;
  })
  return str;
}

const isPrime = function(number) {
  if (number <= 1) return false;
  if (number === 2) return true;
  for (let i = 2 ; i <= Math.floor(Math.sqrt(number)) ; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}


