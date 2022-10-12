function solution(genres, plays) {
    let answer = [];

    const g_total_play = {};
    const g_set = {};

    for (let i = 0 ; i < genres.length ; i++) {
        const genre = genres[i];
        const play = plays[i];
        if(g_total_play[genre]) {
            g_total_play[genre] += play;
        } else {
            g_total_play[genre] = play;
        }

        if (g_set[genre]) {
            g_set[genre].push({i, play});
        } else {
            g_set[genre] = [{i, play}];
        }
    }
    
    const genre_play_arr = [];

    for (const genre in g_total_play) {
        const play = g_total_play[genre];
        genre_play_arr.push({genre, play});
    }

    // sort genre by play count
    genre_play_arr.sort( (a, b) => {
        return Number(b.play) - Number(a.play);
    });

    // sort songs by play count 
    for (const genre in g_set) {
        const arr = g_set[genre];
        arr.sort( (a, b) => {
            return Number(b.play) - Number(a.play);
        });
    };

    for (let i = 0 ; i < genre_play_arr.length ; i++) {
        const genre = genre_play_arr[i].genre;
        const arr = g_set[genre];
        for (let i = 0 ; i < arr.length && i < 2; i++) {
            answer.push(arr[i].i);
        }
    }

    return answer;
}
