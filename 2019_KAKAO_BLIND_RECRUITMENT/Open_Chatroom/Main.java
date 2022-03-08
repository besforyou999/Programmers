import java.util.HashMap;
import java.util.ArrayList;

public class Main {
	public static void main(String [] args) {
		Solution s = new Solution();
		String [] record = {"Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"};
		String [] n = s.solution(record);
	}
}

class Solution {
	HashMap<String, String> map;
	ArrayList<Pair> arr;

	public String[] solution(String[] record) {
        String[] answer;
		
		map = new HashMap<>();
		arr = new ArrayList<>();

		for (int i = 0 ; i < record.length ; i++) {
			String line = record[i];
			String token[] = line.split(" ");
			String op, userId, nickname = "null";
				
			op = token[0];
			userId = token[1];

			if (token.length == 3) nickname = token[2];

			if (op.equals("Enter")) {
				enter_op(userId, nickname);
			} else if (op.equals("Leave")) {
				arr.add(new Pair(nickname, "Leave", userId));
			} else if (op.equals("Change")) {
				map.put(userId, nickname);
			}
		}	
	
		answer = buildAns();	
        return answer;
    }

	public String [] buildAns() {
		String [] ans = new String[arr.size()];
		for (int i = 0 ; i < arr.size() ; i++) {
			Pair p = arr.get(i);
			String line = "";
			String userId = p.id;	
			String nickname = map.get(userId);	
			line += nickname;
			if (p.op.equals("Enter")) {
				line += "님이 들어왔습니다.";
			} else if (p.op.equals("Leave")) {
				line += "님이 나갔습니다.";
			} 
			ans[i] = line;
			//System.out.println(line);
		}
		return ans;
	}

	public void enter_op(String userId, String nickname) { 
		arr.add(new Pair(nickname, "Enter", userId));
		map.put(userId,nickname);
	}

	class Pair {
		String nickname, op, id;
		public Pair(String nick, String op, String id) {
			this.nickname = nick;
			this.op = op;
			this.id = id;
		}
	}
}
