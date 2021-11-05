import java.util.ArrayList;

class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        int len = nums.length;
        
        ArrayList<Integer> arr = new ArrayList<>();
        
        for ( int i = 0 ; i < len - 2 ; i++) {
            for ( int j = i + 1 ; j < len - 1 ; j++ ) {
                for ( int k = j + 1 ; k < len ; k++ ) {
                    arr.add( nums[i] + nums[j] + nums[k]);
                }
            }
        }
        
        for ( int i = 0 ; i < arr.size() ; i++ ) answer += is_prime(arr.get(i));
        return answer;
    }
    
    public int is_prime(int number) { // 소수가 아니면 0, 소수면 1 반환
        
		if(number < 2) return 0; // 0 또는 1은 소수가 아니다
        
		if(number == 2) return 1; // 2는 소수
        
		// 자기자신의 루트까지 자신을 나누었을때 나누어 떨어지면 소수가 아님
		// 나누어 떨어지지 않으면 소수. 시간복잡도를 O(N)에서 O(sqrt(N))까지 떨어뜨린다
		for(int i = 2; i <= Math.sqrt(number); i++) {
			if(number % i == 0) return 0;
		}
        
        return 1;
	}
}
