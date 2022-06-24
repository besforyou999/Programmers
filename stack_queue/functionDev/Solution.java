import java.util.ArrayList;
import java.util.Queue;
import java.util.LinkedList;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        ArrayList<Integer> ans = new ArrayList<>();
        Queue<Pair> q = new LinkedList<>();
        int len = progresses.length;
        for (int i = 0 ; i < len ; i++) {
            q.add(new Pair(progresses[i], speeds[i]));
        }

        while(!q.isEmpty()) {
            for (int i = 0 ; i < q.size() ; i++) {
                Pair p = q.poll();
                int nextProgress = p.progress + p.speed;
                p.progress = nextProgress;
                q.offer(p);
            }
            if ( q.peek().progress < 100) continue;
            else if (q.peek().progress >= 100) {
                int count = 0;
                do {
                    q.poll();
                    count++;
                    if (q.size() == 0) break;
                } while (q.peek().progress >= 100);
                ans.add(count);
            }
        }

        int [] answer = new int[ans.size()];
        for (int i = 0 ; i < ans.size() ; i++) {
            answer[i] = ans.get(i);
        }

        return answer;
    }
}

class Pair {
    int progress;
    int speed;
    Pair(int p, int s) {
        this.progress = p;
        this.speed = s;
    }
}
