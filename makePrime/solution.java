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
    
    public int is_prime(int number) {
        
		if(number < 2) return 0;
        
		if(number == 2) return 1;
        
		for(int i = 2; i <= Math.sqrt(number); i++) {
			if(number % i == 0) return 0;
		}
        
        return 1;
	}
}
