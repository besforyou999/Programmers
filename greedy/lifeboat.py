from collections import deque


def solution(people, limit):
    answer = 0

    people.sort()

    people = deque(people)

    while people:
        weight = people[0] + people[-1]
        if weight <= limit:
            people.popleft()
        if people:
            people.pop()
        answer += 1

    return answer


