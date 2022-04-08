function makeFileData(head, number, tail, source) {
    return {
        HEAD: head,
        NUMBER: number,
        TAIL: tail,
        SRC: source
    };
};

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}

function split_file_to_headNumberTail(file, list) {

    let HEAD = "", NUMBER = "", TAIL = "";

    let idx = 0;

    while (idx < file.length) {
        let ch = file[idx];
        if (ch == " " || ch =="." || ch == "-" || isLetter(ch)) {
            HEAD += ch;
            idx += 1;
        } else 
            break;
        
    }

    while( idx < file.length && NUMBER.length < 5) {
        let ch = file[idx];
        if (isNaN(ch) == false ) {
            NUMBER += ch;
            idx += 1;
        } else
            break;
    }
    
    while (idx < file.length ) {
        let ch = file[idx++];
        TAIL += ch;
    }

    const new_data = makeFileData(HEAD, NUMBER, TAIL, file);
    list.push(new_data);
}


function solution(files) {
    const answer = [];

    const file_data_list = [];

    files.forEach( function(file) {
        split_file_to_headNumberTail((file), file_data_list);
    });

    file_data_list.sort( function(a,b) {
        if (a.HEAD.toLowerCase() < b.HEAD.toLowerCase()) return -1;
        else if (a.HEAD.toLowerCase() > b.HEAD.toLowerCase()) return 1;
        else {
            if ( Number(a.NUMBER) < Number(b.NUMBER) ) return -1;
            else if ( Number(a.NUMBER) > Number(b.NUMBER) ) return 1;
            else
                return 0;
        }
    });

    file_data_list.forEach( function(item) {
        answer.push(item.SRC);
    })

    return answer;
}
/*
let files = ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]
let files2 =  ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]
console.log(solution(files2))
*/

