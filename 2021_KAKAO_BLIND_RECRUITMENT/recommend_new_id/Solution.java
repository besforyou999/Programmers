class Solution {
    public String solution(String new_id) {
        String answer = "";
        
        // Step 1
        for (int i = 0 ; i < new_id.length() ; i++ ) {
            answer = answer + changeUpperToLower(new_id.charAt(i));
        }

		

        
        return answer;
    }
    
    
    public char changeUpperToLower(char letter) {
        if (letter >= 'A' && letter <= 'Z') {
            letter = letter + 32;
        }
        return letter;
    }
    
}
