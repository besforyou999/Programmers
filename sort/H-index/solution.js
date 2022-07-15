function solution(citations) {
  let max = -1;
  let h_index = 0;
  let len = citations.length;
  citations.sort( (a,b) => {
    return Number(a) - Number(b);
  })

  for (; h_index <= citations[len-1] ; h_index++) {
    let used_num = find_used_number(citations, h_index);
    if (used_num >= h_index) max = Math.max(h_index, max);
  }

  return max;
}

function find_used_number(citations, h_index) {
  let len = citations.length;
  let count = 0;
  for (let i = 0 ; i < len ; i++) {
    let cur_cit = citations[i];
    if (cur_cit >= h_index) count += 1;
  }

  return count;
}

