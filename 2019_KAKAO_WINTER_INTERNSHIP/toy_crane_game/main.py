def solution(board, moves):
    answer = 0
    width = len(board)
    basket = []
    stack_arr = [[] for _ in range(width)]
    idx = width - 1
    while idx >= 0:
        for i in range(width):
            val = board[idx][i]
            if val != 0:
                stack_arr[i].append(val)
        idx -= 1

    for move in moves:
        stack = stack_arr[move - 1]
        if len(stack) == 0:
            continue
        val = stack.pop()
        if len(basket) == 0:
            basket.append(val)
            continue
        top_number = basket[-1]
        if val == top_number:
            basket.pop()
            answer += 2
        else:
            basket.append(val)

    return answer


