function solution(arr) {
    
    if (arr.length == 1) return arr[0];

    const a = arr[0];
    let b = arr[1];

    let g = gcd(a, b);
    let lcm = Math.floor((a * b) / g);
    let idx = 2;
    if (arr.length > 2 ) {
        while(idx < arr.length) {
            let b = arr[idx];
            g = gcd(lcm, b);
            lcm = Math.floor((lcm * b) / g);
            idx += 1;
        }
    }

    return lcm;
}

function gcd(a, b) {
    let r = a % b;
    if (r == 0) return b;
    return gcd(b, r);
}

