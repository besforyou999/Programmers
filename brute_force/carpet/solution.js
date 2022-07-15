function solution(brown, yellow) {
  let answer = [];

  let total_box_number = brown + yellow;

  const pairs = makePairs(total_box_number);

  pairs.forEach( pair => {
    if (isAns(pair, brown, yellow) == true) {
      answer = pair;
      return answer;
    }
  })

  return answer;
}

const isAns = function(pair, brown, yellow) {
  const row = pair[0];
  const column = pair[1];

  const b = Number(row * 2) + Number((column * 2) - 4);
  const y = Number(row - 2) * Number(column - 2);
  
  if (b === brown && y === yellow) return true;
  return false;
}

const makePairs = function(number) {
  let pairs = [];
  for (let i = 1 ; i <= number ; i++) {
    if (number % i === 0 && i >= ( number / i ) ) {
      pairs.push([i, number / i])
    }
  }
  return pairs;
}


