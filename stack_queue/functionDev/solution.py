def solution(progresses, speeds):
    answer = []
    while len(progresses) > 0 and len(speeds) > 0:
        for i in range(len(progresses)):
            progresses[i] += speeds[i]
        if progresses[0] < 100:
            continue
        else:
            count = 0
            while len(progresses) > 0 and progresses[0] >= 100:
                progresses.pop(0)
                speeds.pop(0)
                count += 1
            answer.append(count)

    return answer

