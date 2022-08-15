def solution(record):
    answer = []
    dictionary = {}

    for rec in record:
        tokens = rec.split(" ")
        action = tokens[0]
        user_id = tokens[1]
        if action == "Enter" or action == "Change":
            dictionary[user_id] = tokens[2]
        if action == "Enter" or action == "Leave":
            answer.append([user_id, action])

    for idx in range(len(answer)):
        user_id = answer[idx][0]
        action = answer[idx][1]
        nickname = dictionary[user_id]
        string = str(nickname) + "님이 "
        if action == "Enter":
            string += "들어왔습니다."
        else:
            string += "나갔습니다."
        answer[idx] = string

    return answer
    answer = []
    
    return answer
