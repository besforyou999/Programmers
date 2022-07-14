function solution(clothes) {
  let answer = 0;
  let map = new Map();

  for (let i = 0 ; i < clothes.length ; i++) {
    let pair = clothes[i];
    let key = pair[1];

    if (map.has(key)) {
      let value = map.get(key);
      map.set(key, value + 1);
    } else {
      map.set(key, 1);
    }
  }

  let map_size = map.size;
  let key_array = getKeyArray(map);

  for (let i = 1 ; i <= map_size ; i++) {
    let combination = getCombinations(key_array,i);
    for (let combo of combination) { // combo is array
      let sum = 1;
      combo.forEach( key => {
        sum = sum * map.get(key);
      })
      answer += sum;
    }
  }
  
  return answer;
}

const getKeyArray = function(map) {
  let result = [];
  for (let key of map) {
    result.push(key[0]);
  }
  return result;
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  // n개중에서 1개 선택할 때 (nC1인 경우), 모든 원소를 하나의 배열에 한개씩 담아서 반환

  arr.forEach( (fixed, index , origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map ((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}

