class Solution {
    public int[] solution(String[] id_list, String[] report, int k) {
        int[] answer = new int[id_list.length];

        HashMap<String, HashSet> reports = new HashMap<>();         // HashSet 속에는 신고자 존재
        HashMap<String, Integer> reportedCount = new HashMap<>();
        HashMap<String, Integer> mailCount = new HashMap<>();
        ArrayList<String> bannedUser = new ArrayList<>();
        // id_list속의 아이디로 자료구조 초기화  : O(N)
        for (int i = 0 ; i < id_list.length ; i++) {
            String id = id_list[i];
            reports.put(id, new HashSet<>());
            reportedCount.put(id, 0);
            mailCount.put(id, 0);
        }
        // report 리스트를 순차적으로 읽기 : O(NlogN)
        for (int i = 0 ; i < report.length ; i++) {
            String str[] = report[i].split(" ");
            String reporter = str[0];
            String reported = str[1];

            // 신고한 사람이 없다면
            if (!reports.get(reported).contains(reporter)) {
                // 신고한 사람을 hashSet에 삽입
                reports.get(reported).add(reporter);
                // 신고받은 횟수 누적시키기
                int count = reportedCount.get(reported);
                reportedCount.put(reported, count + 1);
            }
        }

        // 다시 id_list를 순차적으로 돌며 K번 이상 신고당한 유저 찾기 : O(N)
        for (int i = 0 ; i < id_list.length ; i++) {
            String name = id_list[i];
            int num = reportedCount.get(name);
            if ( num < k ) continue;

            // k번 이상 신고당한 사람 모으기
            bannedUser.add(name);
        }

        // O(N logN * N * logN)
        for (int i = 0 ; i < bannedUser.size() ; i++) {
            String user = bannedUser.get(i);
            HashSet<String> reporters = reports.get(user);
            for (String reporter : reporters) {
                int count = mailCount.get(reporter);
                mailCount.put(reporter, count + 1);
            }
        }

        // 다시 순차적으로 돌며 정답 배열 생성
        for (int i = 0 ; i < id_list.length ; i++) {
            String name = id_list[i];
            answer[i] = mailCount.get(name);
        }

        return answer;
    }
}
