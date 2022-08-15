def tokenize(number, string):
    
    start_idx = number
    end_idx = number + number
    current_str = string[0:number]
    duplicate_str = 1
    answer_str = ""
    while end_idx <= len(string):
        temp = string[start_idx:end_idx]
        if current_str == temp:
            duplicate_str += 1
        else:
            if duplicate_str > 1:
                answer_str += (str(duplicate_str) + current_str)
            else:
                answer_str += current_str
            current_str = temp
            duplicate_str = 1

        start_idx = end_idx
        end_idx += number

    if duplicate_str > 1:
        answer_str += (str(duplicate_str) + current_str)
    else:
        answer_str += current_str

    if start_idx < len(string):
        answer_str += string[start_idx:]

    return answer_str


def solution(s):
    if len(s) == 1:
        return 1
    answer = 100000
    str_len = len(s)
    token_size = 1

    while token_size < str_len:
        token = tokenize(token_size, s)
        answer = min(len(token), answer)
        token_size += 1

    return answer

