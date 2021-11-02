function solution(numbers, hand) {
    var answer = '';
    let l_pos = [0,3] , r_pos = [2,3];

    function calcNumPos(curr) {
        if (curr == 0)
            return [1,3];
        else if ( curr == 2) 
            return [1,0];
        else if ( curr == 5)
            return [1,1];
        else if ( curr == 8)
            return [1,2];
        else if ( curr == 1)
            return [0,0];
        else if ( curr == 4)
            return [0,1];
        else if ( curr == 7) 
            return [0,2];
        else if ( curr == 3) 
            return [2,0];
        else if ( curr == 6) 
            return [2,1];
        else if ( curr == 9)
            return [2,2];
    }
    
    function calcDistance(curr, pos) {
        let numPos = calcNumPos(curr); 
        let x = Math.abs(numPos[0] - pos[0]);
        let y = Math.abs(numPos[1] - pos[1]);
        return x+y;
    }

    for (let i = 0 ; i < numbers.length ; i++) {
        let curr = numbers[i];
        if (curr == 1 || curr == 4 || curr == 7) {
            l_pos = calcNumPos(curr);
            answer += "L";
        } else if ( curr == 3 || curr == 6 || curr == 9 ) {
            r_pos = calcNumPos(curr);
            answer += "R";
        } else {
            let l_distance = calcDistance(curr,l_pos);
            let r_distance = calcDistance(curr, r_pos);
            if( l_distance > r_distance ) {
                answer += "R";
                r_pos = calcNumPos(curr);
            }
            else if (l_distance < r_distance) {
                answer += "L";
                l_pos = calcNumPos(curr);
            }
            else {
                if (hand =="right") {
                    answer += "R";
                    r_pos = calcNumPos(curr);
                }
                else if (hand == "left") {
                    answer += "L";
                    l_pos = calcNumPos(curr);
                }
            }
        }      
    }
    
    return answer;
}

let numArr = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
let hand = "left";

let ans = solution(numArr, hand);

alert(ans);
