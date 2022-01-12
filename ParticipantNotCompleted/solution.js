function solution(p, c) {  
    let pMap = new Map();
    
    for (let i = 0 ; i < p.length ; i++ ) {
        let n = p[i];
        if (pMap.has(n)) {
            let count = pMap.get(n);
            pMap.set(n, ++count);
        } else 
            pMap.set(n, 1);
    }
    
    for (let i = 0; i < c.length ; i++) {
        let n = c[i];
        let count = pMap.get(n);
        if (count == 1) 
            pMap.delete(n);
        else 
            pMap.set(n, --count);
    }
    
    const iter1 = pMap.keys();
    return iter1.next().value;
}
