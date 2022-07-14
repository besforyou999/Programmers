function solution(nums) {
  let answer = 0;
  let map = new Map();
  let N = nums.length;
  let N_half = Number(N/2);

  for (let i = 0 ; i < N ; i++) {
    let number = nums[i];
    if(map.has(number)) {
      let value = map.get(number);
      map.set(number, value + 1);
    } else {
      map.set(number, 1);
    }
  }
  
  let map_size = map.size;

  if (map_size >= N_half) {
    answer = N_half;
  } else {
    answer = map_size;
  }

  return answer;
}

