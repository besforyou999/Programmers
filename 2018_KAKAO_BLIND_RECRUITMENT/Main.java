public class Main {
	public static void main(String [] args) {
		Solution s = new Solution();
		int arr1[] = {9, 20, 28, 18, 11};
		int arr2[] = {30, 1, 21, 17, 28};
		String [] ans = s.solution(5, arr1, arr2);
		
		for (String str : ans) {
			System.out.println(str);
		}
	}
}

class Solution {
	public String[] solution(int n, int[] arr1, int[] arr2) {
        String[] answer = new String[n];
			
		Character [][]mat = new Character [n][n];
		for (int i = 0 ; i < n ; i++) {
			String str1 = toBinary(arr1[i], n);
			String str2 = toBinary(arr2[i], n);
			String ans = "";
			for (int j = 0 ; j < n ; j++) {
				Character c1 = str1.charAt(j);
				Character c2 = str2.charAt(j);
				if (c1 == '0' && c2 == '0') ans += " ";
				else						ans += "#";
			}
			answer[i] = ans;
		}

        return answer;
    }

	public String toBinary(Integer number, int n) {
		String ans = "";

		while (true)	{
			Integer res = number % 2;
			number /= 2;
			ans = res.toString() + ans;
			if (number <= 1) break;
		}

		ans = number + ans;

		while (	ans.length() != n ) {
			ans = "0" + ans;
		}

		return ans;	
	}
}


