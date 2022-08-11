def solution(id_list, report, k):
    reporter_reported = {}
    how_many_reported = {}

    for id in id_list:
        reporter_reported[id] = []
        how_many_reported[id] = 0

    for record in report:
        reporter_id, reported_id = record.split(' ')
        reported_id_arr = reporter_reported[reporter_id]
        if not (reported_id in reported_id_arr):
            reported_id_arr.append(reported_id)
            how_many_reported[reported_id] += 1

    banned_id_arr = []

    for id in how_many_reported:
        if how_many_reported[id] >= k:
            banned_id_arr.append(id)

    answer = []

    for id in id_list:
        reported_id_arr = reporter_reported[id]
        count = 0
        for banned_id in banned_id_arr:
            if banned_id in reported_id_arr:
                count += 1
        answer.append(count)

    return answer
