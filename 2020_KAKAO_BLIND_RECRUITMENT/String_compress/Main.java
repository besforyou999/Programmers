import java.util.Stack;

public class Main {
	public static void main(String [] args) {
		Solution s = new Solution();
		System.out.print(s.solution("xababcdcdababcdcd"));
	}
}

class Solution {
	public int solution(String s) {
		int len = s.length();
		int min = 1001;
		for (int i = 1 ; i <=  len  ; i++) {
			String compressed_str = compress(i, s);	
			//System.out.println(compressed_str);
			int newLen = compressed_str.length();
			if (min > newLen) min = newLen;
		}
		return min;
	}

	public String compress(int unit, String str) {
		int len = str.length();
		int idx = 0;
		Integer count = 0; 
		int unit_count = len / unit;
		if ( len % unit != 0 ) unit_count += 1;	
		String [] units = new String[unit_count];

		while (idx < len) {
			String token = "";
			for (int i = 0 ; i < unit && idx < len; i++) {
				token += str.charAt(idx);
				idx += 1;	
			}
			
			units[count++] = token;
		}	

		count = 0;
		String ans = "", cur;
		Stack<String> stack = new Stack<>();
		for (int i = 0 ; i < unit_count ; i++) {
			cur = units[i];
			if ( stack.isEmpty() == true ) stack.push(cur);
			else {
				if (stack.peek().equals(cur)) stack.push(cur);
				else {
					Integer size = stack.size();
					if (size > 1 ) ans += size.toString();
					ans += stack.peek();
					stack.clear();
					stack.push(cur);
				}
			}
		}

		Integer size = stack.size();
		if (size > 1 ) ans += size.toString();
		ans += stack.peek();

		return ans;	
	}
}
