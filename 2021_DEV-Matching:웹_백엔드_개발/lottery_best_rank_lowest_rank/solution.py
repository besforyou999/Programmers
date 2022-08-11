def solution(lottos, win_nums):
    answer = []
    score_board = {0: 6, 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1}
    zero_count = 0
    same_number_count = 0
    different_number_count = 0

    for num in lottos:
        if num == 0:
            zero_count += 1
        elif num in win_nums:
            same_number_count += 1
        else:
            different_number_count += 1

    low = same_number_count
    high = same_number_count + zero_count

    answer.append(score_board[high])
    answer.append(score_board[low])

    return answer
