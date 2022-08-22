def solution(want, number, discount):
    answer = 0

    dic = {}

    for idx in range(len(want)):
        item = want[idx]
        quantity = number[idx]
        dic[item] = quantity

    basket = {}

    for i in range(10):
        item = discount[i]
        val = basket.get(item)
        if val is None:
            basket[item] = 1
        else:
            basket[item] = val + 1

    if basket == dic:
        answer += 1

    lp = 0
    rp = 10

    while rp < len(discount):
        item_to_remove = discount[lp]
        item_to_remove_count = basket[item_to_remove]
        if item_to_remove_count == 1:
            del basket[item_to_remove]
        else:
            basket[item_to_remove] = item_to_remove_count - 1

        item_to_add = discount[rp]
        item_to_add_count = basket.get(item_to_add)
        if item_to_add_count is None:
            basket[item_to_add] = 1
        else:
            basket[item_to_add] = item_to_add_count + 1

        lp += 1
        rp += 1

        if dic == basket:
            answer += 1

    return answer

