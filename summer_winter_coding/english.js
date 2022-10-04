function solution(n, words) {
    let answer = [];
    const used_words = new Map();
    const SIZE = words.length;
    let prev_word = words[0];
    used_words.set(prev_word, 1);
    let turn = 1;
    for (let i = 1 ; i < SIZE ; i++) {
        if (i % n == 0) turn += 1;
        const word = words[i];
        const last_letter = prev_word[prev_word.length - 1];
        const first_letter = word[0];
        if (last_letter != first_letter || used_words.has(word)) {
            const number = Math.floor(i % n) + 1;
            answer = [number, turn];
            break;
        } 
        used_words.set(word, 1)
        prev_word = word;
    }

    if (answer.length == 0) answer = [0, 0];
    return answer;
}

