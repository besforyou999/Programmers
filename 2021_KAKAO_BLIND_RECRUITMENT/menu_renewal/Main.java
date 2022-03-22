import java.util.HashSet;
import java.util.Iterator;
import java.util.ArrayList;

public class Main {
	public static void main(String [] args) {
		Solution s = new Solution();
		String [] orders = { "ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH" };
		int [] course = {2,3,4};
		s.solution(orders, course);
	}
}

class Solution {

	HashSet<String> foods = new HashSet<>();
	ArrayList<String> combinations = new ArrayList<String>();
	ArrayList<String> answer = new ArrayList<>();

	public String[] solution(String [] orders, int[] course) {
		// 모든 음식 종류를 hashSet에 저장
		// MAX : O(20 * 10)
		for(String str : orders) {
			String chr [] = str.split("");
			for (String c : chr) { 
				foods.add(c);
			}
		}
		
		// 필요한 모든 조합 생성	
		int n = foods.size(), i = 0; 
		String [] set_elements = new String[n];	
		Iterator<String> it = foods.iterator();
		while(it.hasNext())	set_elements[i++] = it.next(); // O(N)

		// O( N^3 ) 이지만 N의 최대가 10
		for ( int j : course ) { 
			boolean[] visited = new boolean[n];
			build_combinations(set_elements , visited, 0, n, j); 
		}

		// orders의 원소안에 조합이 포함되는지 확인. 2개 이상 있으면 answer에 추가
		for (String combination : combinations) {
			System.out.println(combination);
		//	if ( checkIfCombinationExists(combination, orders) == true ) answer.add(combination);
		}

		return answer.toArray(new String[answer.size()]);
	}

	public boolean checkIfCombinationExists(String combination, String [] orders) {
		int count = 0;

		for (String order : orders) {
			if (combination.length() > order.length()) continue;				
			if (count >= 2) break;		
			
			for (int i = 0 ; i < combination.length() ; i++) {
			
			}			

		}

		if (count < 2 ) return false;

		return true;
	}

	public void build_combinations(String[] set_elements, boolean[] visited, int start, int n, int r) {
		
		if ( r == 0 ) {
			save(set_elements, visited, n);
			return ;
		}

		for (int i = start; i < n ; i++) {
			visited[i] = true;
			build_combinations(set_elements, visited, i + 1, n, r - 1 );
			visited[i] = false;
		}
	}

	public void save(String [] set_elements, boolean[] visited, int n) {
		String str = "";
		for (int i = 0 ; i < n ; i++) 
			if (visited[i])	str += set_elements[i];
		combinations.add(str);
	}

}
