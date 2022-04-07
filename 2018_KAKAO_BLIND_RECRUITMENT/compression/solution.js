function dic_init(dic) {
    let ch = 'A'.charCodeAt(0)
    for(let i = 1 ; i <= 26 ; i++) {
        dic.set( String.fromCharCode(ch) , i)
        ch++;
    }

}

function solution(msg) {
    var answer = [];

    const dic = new Map()

    dic_init(dic)

    let new_idx = 27;

    do {
        let prev_str = ""
        let cur_str = ""
        for (let i = 0 ; i < msg.length ; i++) {
            cur_str += msg[i]
            if (dic.has(cur_str) == false) break;
            prev_str = cur_str;
        }
        
        answer.push(dic.get(prev_str));
        dic.set(cur_str, new_idx++);
        
        msg = msg.substring(prev_str.length);

    } while (msg.length != 0)

    return answer;
}

