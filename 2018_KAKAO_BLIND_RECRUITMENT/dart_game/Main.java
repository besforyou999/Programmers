public class Main {
	public static void main(String [] args) {
		Solution s = new Solution();
		int a = s.solution("1S2D*3T");
		System.out.print(a);
	}
}

class Solution {
	public int solution(String dartResult) {
		int answer = 0, idx = 0;
		Set[] sets = new Set[3];
		int len = dartResult.length();

		for (int i = 0 ; i < 3 ; i++) {
			int number = 0;
			String set ="";

			Character firstDigit = dartResult.charAt(idx);
			Character secondDigit = 'n';
			if (firstDigit == '1') {
				secondDigit = dartResult.charAt(idx + 1);
			}	
			
			if (Character.isDigit(secondDigit) == true) {
				set = firstDigit.toString() + secondDigit.toString();
				idx += 1;
			} else 
				set = firstDigit.toString();
			
			number = Integer.parseInt(set);

			Character bonus = dartResult.charAt(idx+1);
			idx += 1;

			Character checkOption = 'n';

			if ( idx + 1 < len ) { checkOption = dartResult.charAt(idx + 1);  }

			if (checkOption == '*' || checkOption =='#') { 
				set += checkOption;
				idx += 1;
			}	
			idx += 1;
			Set s = new Set(number, bonus, checkOption);
			sets[i] = s;
		}

		int ans [] = new int[3];

		for (int i = 0 ; i < 3 ; i++) {
			
			Set s = sets[i];
			
			int num = s.score;
			int multi = 0;
		
			if (s.bonus == 'S') multi = 1;
			else if (s.bonus == 'D') multi = 2;
			else if (s.bonus == 'T') multi = 3;		

			int currentAns = (int)Math.pow(num, multi);	
			ans[i] = currentAns;
			
			if (s.option == 'n') continue;	
			else if (s.option == '*' ) {
				if (i != 0)	ans[i-1] *= 2;   
				ans[i] *= 2;				
			} else if (s.option == '#') ans[i] *= -1;
		}

		for (Integer num : ans) {
			answer += num;
		}

		return answer;
	}
}

class Set {
	Integer score;
	Character bonus;
	Character option;
	Set(int a , char b, char o) {
		score = a;
		bonus = b;
		option = o;
	}
}
