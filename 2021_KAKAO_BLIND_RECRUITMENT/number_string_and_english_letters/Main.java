public class Main {
	public static void main(String [] args) {

		Solution s = new Solution();
		System.out.println(s.solution("one4seveneight"));
	}
}

class Solution {
	public int solution(String s) {
		String ans = "";
		int len = s.length(), i = 0;

		while (i < len) {
			Character c1 = s.charAt(i);
			if ( Character.isDigit(c1) ) {
				ans += c1;
			} else {
				Character c2 = s.charAt(i+1);
				String num = classifier(c1, c2);
				Integer move = numberWordLength(num);
				i += ( move - 1 );
				ans += num;
			}
			i++;
		}

		return Integer.parseInt(ans);
	}	

	public String classifier(Character c1, Character c2) {
		
		switch(c1) {
			case 'z' : {
								 return "0";
			}
			case 'o' : {
								 return "1";
			}
			case 't' : {
				if ( c2 == 'w' ) return "2";
				else             return "3";	
			}
			case 'f' : {
				if ( c2 == 'o' ) return "4";
				else			 return "5";
			}
			case 's' : {
				if ( c2 == 'i' ) return "6";
			    else			 return  "7";
			}
			case 'e' : {
								 return "8";
			}
			case 'n' : {
								 return "9";
			}
			default : {
						  System.out.println("default detected");
			}
		}	
		
		return "null";
	}

	public Integer numberWordLength(String number) {
		switch(number) {
			case "1":
			case "2":
			case "6": return 3;
			case "0":
			case "4":
			case "5":
			case "9": return 4;
			case "3":
			case "7":
			case "8": return 5;
			default :
					  return -1;
		}
	}

}

