function solution(k, dungeons) {
    let answer = -1;
    
    const N = dungeons.length;

    const arr = [];
    for (let i = 0 ; i < N ; i++) {
        arr.push(i);
    }

    const perms = permutation(arr, N);

    perms.forEach(arr => {
        answer = Math.max(answer, maximum_search(arr, dungeons, k));
    })

    return answer;
}

function maximum_search(arr, dungeons, k) {
    let depth = 0;
    for(let i = 0 ; i < arr.length ; i++) {
        const idx = arr[i];
        const [min_fatigue_needed, fatigue_usage] = dungeons[idx];
        if (k >= min_fatigue_needed) {
            depth += 1;
            k -= fatigue_usage;
        } else {
            break;
        }
    }
    return depth;
}


function permutation(arr, num) {
    const res = [];
    if (num == 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
        const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
        const permutations = permutation(rest, num - 1);
        const attach = permutations.map((permutation) => [v, ...permutation]);
        res.push(...attach);
    });
    return res;
}

