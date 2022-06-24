import java.util.HashMap;
import java.util.Arrays;

class Solution {
    public boolean solution(String[] phone_book) {
        HashMap<String, Boolean> map = new HashMap<>();
        Arrays.sort(phone_book);
        for (String number : phone_book) {
            String temp = "";
            for (int i = 0 ; i < number.length() ; i++) {
                temp += number.charAt(i);
                if (map.containsKey(temp)) {
                    return false;
                }
            }
            map.put(number, true);
        }
        return true;
    }
}
