coords = {0: [1, 0], 7: [0, 1], 8: [1, 1], 9: [2, 1],
              4: [0, 2], 5: [1, 2], 6: [2, 2], 1: [0, 3], 2: [1, 3], 3: [2, 3]}

lx, ly = 0, 0
rx, ry = 2, 0

def closer_hand(number, hand):
    answer = ""
    if number == 1 or number == 4 or number == 7:
        answer = "L"
    elif number == 3 or number == 6 or number == 9:
        answer = "R"
    else:
        nx, ny = coords[number]
        l_distance = abs(lx - nx) + abs(ly - ny)
        r_distance = abs(rx - nx) + abs(ry - ny)
        if l_distance > r_distance:
            answer = "R"
        elif l_distance < r_distance:
            answer = "L"
        else:
            if hand == 'right':
                answer = "R"
            else:
                answer = "L"
    return answer


def change_coord(changed_hand, number):
    global lx, ly, rx, ry
    if changed_hand == "L":
        lx, ly = coords[number]
    else:
        rx, ry = coords[number]


def solution(numbers, hand):
    answer = ""

    for num in numbers:
        next_hand = closer_hand(num, hand)
        change_coord(next_hand, num)
        answer += next_hand

    return answer


