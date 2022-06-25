class Solution {
    public int solution(int[] scoville, int K) {
        int answer = 0;
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int s : scoville) {
            pq.offer(s);
        }
        while (pq.peek() < K) {
            int mostUnspicy = pq.poll();
            int secondUnspicy = pq.poll();
            int combo = mostUnspicy + (2*secondUnspicy);
            pq.offer(combo);
            answer += 1;
            if (pq.size() == 1 && pq.peek() < K) {
                answer = -1;
                break;
            }
        }
        return answer;
    }
}

