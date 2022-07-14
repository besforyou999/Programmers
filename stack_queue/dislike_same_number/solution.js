function solution(arr)
{ 
    let queue = new Array();
    queue.push(arr[0]);
    let idx = 0;
    for (let i = 1 ; i < arr.length ; i++) {
      let element = arr[i];
      let front = queue[idx];
      if (element != front) {
        queue.push(element);
        idx += 1;
      }
    }
    
    return queue;
}
