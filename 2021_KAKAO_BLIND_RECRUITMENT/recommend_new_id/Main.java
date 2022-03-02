public class Main {
	public static void main (String [] args) {

		String new_id = "...!@BaT#*..y.abcdefghijklm.";

		Solution s = new Solution();

		String result = s.solution(new_id);

		System.out.print(result);
	}


}

class Solution {
    public String solution(String new_id) {
        String answer = "";
		String temp = ""; 

        // Step 1
		answer = new_id.toLowerCase();

		// Step 2
		for (int i = 0 ; i < answer.length() ; i++) {
			Character ch = answer.charAt(i);
			if (ch == '-' || ch == '_' || ch == '.' || 	Character.isDigit(ch) || isAlpha(ch) ) 
				temp += ch;
			else
				continue;
		}
		
		answer = temp;

		// Step 3
		answer = mergeDots(answer);	

		// Step 4
		answer = trimDots(answer);	

		// Step 5
		if (answer.length() == 0) answer = "a";

		// Step 6
		answer = limitTo15(answer);

		// Step 7
		if ( answer.length() <= 2 ) {
			answer = stretchString(answer);
		}

        return answer;
    }

	public boolean isAlpha(char c) {
		if ( c >= 'a' && c <= 'z' ) return true;
		else
			return false;
	}	

	public String mergeDots(String str) {
		String ans = "";
		StringBuilder string = new StringBuilder(str);
		for (int i = 0 ; i < string.length() ; i++) {
			Character c = string.charAt(i);
			if ( c == '.')  { 
				int p1 = i, p2 = i;
				while ( p2 != string.length() && string.charAt(p2) == '.' ) p2 += 1;
				i = p2 - 1;
			}
			ans += c;	
		}
		return ans;
	}

	public String trimDots(String str) {

		StringBuilder string = new StringBuilder(str);

		if (string.charAt(0) == '.' ) string.deleteCharAt(0);
		int len = string.length();
		if (string.charAt(len - 1) == '.' ) string.deleteCharAt(len - 1);

		return string.toString();
	}
  
	public String limitTo15(String str) {
		String ans = str.substring(0, 14);
		ans = trimDots(ans);
		return ans;	
	}

	public String stretchString(String str) {
		int len = str.length();
		Character c = str.charAt(len - 1);

		while (str.length() != 3 ) {
			str += c;
		}	
		return str;	
	}

}




















