function time_to_minutes(start, end) {

    let token = start.split(':')
    let firstMin = Number(token[0]) * 60 + Number(token[1])
        token = end.split(':')
    let endMin = Number(token[0]) * 60 + Number(token[1])

    return endMin - firstMin
}


// output : list[name, melody, musicLen]
function split_str_name_melody_musicLen(str) {

    let obj = []

    let tokens = str.split(',')
    let start = tokens[0], end = tokens[1] , name = tokens[2], melody = substitution(tokens[3]);
    let play_minutes = time_to_minutes(start, end)
    let melody_len = melody.length;

    if ( play_minutes > melody_len ) {
        for (let i = 0 ; i < play_minutes - melody_len ; i++) {
            melody += melody[i%melody_len]
        }
    } else if ( play_minutes < melody_len ) {
        melody = melody.substring(0, play_minutes )
    }

    obj.push(name)
    obj.push(melody)
    obj.push(play_minutes)
    return obj
}

function findLongestPlaytime(candidate_list) {
    let candidates = []
    let longest = candidate_list[0][2]
    for (let i = 1 ; i < candidate_list.length ; i++) {
        let info = candidate_list[i]
        if (longest < info[2]) { 
            longest = info[2]
        }
    }

    for (let i = 0 ; i < candidate_list.length ; i++) {
        let info = candidate_list[i]
        if (longest == info[2]) { 
            candidates.push(info)
        }
    }
    return candidates
}

function substitution(str) {

    let new_str = ""

    for (let i = 0 ; i < str.length - 1 ; i++) {
        let ch1 = str[i];
        let ch2 = str[i+1];
        
        if (ch2 != "#") { 
            new_str += ch1;
        } else {
            new_str += ch1.toLowerCase()
            i += 1
        }
    }

    let ch = str[str.length-1]
    if (ch != "#") new_str += ch;

    return new_str;
}

function checkExistence(m , melody) {

    if (m.length > melody.length) return -1;

    for (let i = 0 ; i < melody.length ; i++) {
        let temp = melody.substring(i, i + m.length)
        if (temp == m) return 1;
    }

    return -1;
}

function solution(m, musicinfos) {
    var answer = '';

    m = substitution(m)

    let ans_candidate = []

    for (let i = 0 ; i < musicinfos.length ; i++) {
        let info =  split_str_name_melody_musicLen(musicinfos[i])
        //let exist = info[1].indexOf(m)
        let exist = checkExistence(m, info[1])
        if (exist != -1) ans_candidate.push(info)
    }
    
    if (ans_candidate.length == 0) return "(None)"
    else if (ans_candidate.length == 1) return ans_candidate[0][0]
    else {
        ans_candidate = findLongestPlaytime(ans_candidate)
        return ans_candidate[0][0]
    }
    
    return answer;
}
