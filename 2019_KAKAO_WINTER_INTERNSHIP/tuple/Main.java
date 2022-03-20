import java.util.HashSet;
import java.util.ArrayList;
import java.util.Stack;
import java.util.Iterator;
import java.util.Collections;
import java.util.Comparator;

public class Main {
	public static void main(String [] args) {

		Solution s = new Solution();
		int [] ans = s.solution("{{20,111},{111}}");

		for (int i : ans) {
			System.out.print(i + " ");
		}
	}
}

class Solution {
	public int [] solution(String s) {
		int [] answer = new int[3];
		int len = s.length();

		String str = s.substring(1, len - 1);
	
		HashSet <String> set = new HashSet<>();	
		ArrayList<HashSet<String>> array = new ArrayList<>();			
	
		// put hashset into array	
		for (int i = 0 ; i < str.length() ; i++) {
			String line = "";
			Character c = str.charAt(i);
			if ( c == '{' ) {
				int j = i;
				while(str.charAt(j) != '}' && j < str.length()) j += 1;
				line = str.substring(i+1, j);	
				String [] tokens = line.split(",");
				for (String t : tokens) set.add(t);
				array.add(set);
				i = j;
				set = new HashSet<>();
			}
		}

		Collections.sort(array , new Comparator<HashSet<String>>() {
			@Override
			public int compare(HashSet<String> h1, HashSet<String> h2) {
				if (h1.size() > h2.size() )
					return 1;
				else if ( h1.size() < h2.size() )
					return -1;
				return 0;
			}
		});
		
		HashSet<String> answer_set = new HashSet<>();
		int idx = 0;
		answer = new int[array.size()];
		Iterator <String> it;		
		Iterator <String> answer_set_it;

		for (HashSet<String> hs : array) {
			it = hs.iterator();

			if (hs.size() == 1) {
				String c = it.next();
				answer_set.add(c);
				answer[idx++] = Integer.parseInt(c);
				continue;
			}
		
			while(it.hasNext()) {
				String check_s = it.next();
				if (answer_set.contains(check_s) == false) {
					answer_set.add(check_s);
					answer[idx++] = Integer.parseInt(check_s); 
					break;
				}	
			}
		}
		return answer;
	}

}
