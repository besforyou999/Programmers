class Pair {
    constructor (userId, op) {
        this._userId = userId;
        this._op = op;
    }
    get getUserId() { return this._userId; }
    get getOp() { return this._op; }
}

function solution(record) {
    var answer = [];

    let map = new Map();
    let array = new Array();

    for (let i = 0 ; i < record.length ; i++) {
        let line = record[i];
        let tokens = line.split(' ');
        let op , userId, nickname;
        op = tokens[0];
        userId = tokens[1];
        if (tokens.length == 3) { nickname = tokens[2]; }
        
        if ( op == "Enter") {
            array.push(new Pair(userId, op));
            map.set(userId, nickname);
        } else if ( op == "Leave") {
            array.push(new Pair(userId, op));
        } else if (op == "Change") {
            map.set(userId, nickname);
        }
    }

    for (let i = 0 ; i < array.length ; i++) {
        let line = "";
        let pair = array[i];
        let userId = pair.getUserId;
        let operation = pair.getOp;
        let nickname = map.get(userId);

        line += ( nickname + "님이 ");
        if (operation == "Enter") {
            line += "들어왔습니다.";
        } else if (operation == "Leave") {
            line += "나갔습니다.";
        }
        answer.push(line);
    }
    
    return answer;
}



