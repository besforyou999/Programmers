def solution(X, Y):
    x_dic = {}
    y_dic = {}

    for ch in X:
        result = x_dic.get(ch)
        if result is None:
            x_dic[ch] = 1
        else:
            x_dic[ch] = result + 1

    for ch in Y:
        result = y_dic.get(ch)
        if result is None:
            y_dic[ch] = 1
        else:
            y_dic[ch] = result + 1

    common_numbers = {}

    keys = list(x_dic.keys())

    for key in keys:
        y_count = y_dic.get(key)
        if y_count is None:
            continue

        x_count = x_dic.get(key)
        if x_count is None:
            continue

        minimum = min(y_count, x_count)
        common_numbers[key] = minimum

    key_list = list(common_numbers.keys())

    if len(key_list) == 0:
        return "-1"

    if len(key_list) == 1 and key_list[0] == '0':
        return "0"

    key_list.sort(reverse=True)
    answer = ''
    for key in key_list:
        number_count = common_numbers.get(key)
            answer += (key * number_count)

    return answer

