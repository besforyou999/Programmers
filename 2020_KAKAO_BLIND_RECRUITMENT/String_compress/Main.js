function solution(s) {

	let len = s.length;
	let min = 1001;

	for (let i = 1 ; i <= len ; i++) {
		let compressed_str = compress(i, s);
		let newLen = compressed_str.length;
		if (min > newLen) min = newLen;
	}

    return min;
}

function compress(unit, str) {
	let len = str.length;
	let idx = 0;
	let count = 0;
	let unit_count = len / unit;
	if ( len % unit != 0 ) unit_count += 1;

	let [] units = new Array(unit_count);

	while ( idx < len ) {
		let token = "";
		for (int i = 0 ; i < unit && idx < len ; i++) {
			token += str[idx];
			idx += 1;
		}
		units[count++] = token;
	}

	count = 0;
	let ans = "", cur;
	let stack = new Stack();

	for (let i = 0 ; i < unit_count ; i++) {
		cur = units[i];
		if ( stack.isEmpty() == true ) stack.push(cur);
		else {
			if ( stack.peek() == cur ) stack.push(cur);
			else {
				let size = stack.size();
				if ( size > 1 ) ans += String(size);
				ans += stack.peek();
				stack.clear();
				stack.push(cur);
			}
		}
	}
	
	let size = stack.size();
	if ( size > 1 ) ans += String(size);
	ans += stack.peek();

	return ans;
}

class Stack {
  constructor() {
	 this._arr = [];
  }
  push(item) {
	 this._arr.push(item);
  }
  pop() {
	 return this._arr.pop();
  }
  peek() {
	 return this._arr[this._arr.length - 1];
  }
  size() {
	 return this._arr.length;
  }
  isEmpty() {
	if ( this._arr.length == 0 ) return true;
	else
	  return false;
  }
}












