import java.util.Stack;

public class Main {
	public static void main(String [] args) {
		String p = "a";
		Solution s = new Solution();
		System.out.println(s.solution(p));
	}
}

class Solution {
	public String solution(String p) {
        String answer = "end";

		

		// Step 1
		if (p.length() == 0) return "";

		if ( checkIfCorrectString(p) ) return p;

		// Step 2
		String [] temp = splitToU_V("()))((()");
		
		if ( checkIfCorrectString(temp[0]) )





	

        return answer;
    }

	public String[] splitToU_V(String str) {
		String [] answer = { "", "" }; 
		if (str.length() <= 1 ) return answer; 
			
		int left_count = 0 , right_count = 0, idx = -1;

		do {
			idx += 1;
			Character char1= str.charAt(idx);
			
			if (char1 == '(') left_count += 1;
			else if (char1 == ')') right_count += 1;

		} while ( idx < str.length() && left_count != right_count );

		answer[0] = str.substring(0, idx + 1);
		answer[1] = str.substring(idx + 1, str.length() );	

		return answer;
	}

	public boolean checkIfCorrectString(String str) {
		
		Stack<Character> stack = new Stack<>();

		for (int i = 0 ; i < str.length() ; i++) {
			Character c = str.charAt(i);
			if ( c == '(' ) stack.push(c);
			else if ( c == ')' ) {
				if (stack.empty() == true) return false;
				Character top = stack.peek();
				if (top == '(') stack.pop();
			}
		}

		if (stack.empty() == false) return false;
		return true;
	}
}
