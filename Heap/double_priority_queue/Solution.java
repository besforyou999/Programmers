import java.util.*;

class Solution {
    static PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());
    PriorityQueue<Integer> minHeap = new PriorityQueue<>();
    public int[] solution(String[] operations) {
        int[] answer = new int[2];

        for (String op : operations) {
            StringTokenizer st = new StringTokenizer(op);
            String cmd = st.nextToken();
            Integer number = Integer.parseInt(st.nextToken());
            if (cmd.equals("I")) {
                maxHeap.add(number);
                minHeap.add(number);
            } else if(number == 1){
                if (!maxHeap.isEmpty()) {
                    int val = maxHeap.poll();
                    minHeap.remove(val);
                }
            } else if (number == -1) {
                if (!minHeap.isEmpty()) {
                    int val = minHeap.poll();
                    maxHeap.remove(val);
                }
            }
        }

        if (!maxHeap.isEmpty())
            answer[0] = maxHeap.poll();
        if (!minHeap.isEmpty())
            answer[1] = minHeap.poll();

        return answer;
    }
}
