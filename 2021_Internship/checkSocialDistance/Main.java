public class Main {
	public static void main(String [] args) {
		Solution s = new Solution();

		String [][] places = {  {"POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"},
								{"POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"},
								{"PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"},
								{"OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"},
								{"PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"}
		};

		s.solution(places);
	}
}

class Solution {
	public int[] solution(String [][] places) {
		int [] answer = new int[5];

		for (int i = 0 ; i < 5 ; i++) {
			String [] row = places[i];
			answer[i] = checkMat(row);
		}
				
		return answer;
	}

	public int checkMat(String [] mat) {

		for(String s : mat) {
			System.out.println(s);
		}

		return 1;
	}

}
