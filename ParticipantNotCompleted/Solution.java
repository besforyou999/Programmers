import java.util.HashMap;

class Solution {
    public String solution(String[] participant, String[] completion) {
        
        HashMap<String , Integer> pMap = new HashMap<>();
        for (int i = 0 ; i < participant.length ; i++) {
            String name = participant[i];
            if (pMap.containsKey(name)) {
                int count = (int)pMap.get(name);
                pMap.put(name, ++count);
            } else {
                pMap.put(name, 1);
            }
        }
        
        for (int i = 0 ; i < completion.length ; i++) {
            String name = completion[i];
            int count = (int)pMap.get(name);
            if (count == 1) {
                pMap.remove(name);
            } else {
                pMap.put(name, --count);
            }
        }
        
        String temp = pMap.keySet().toString();
        return temp.substring(1, temp.length() - 1);
    }
}


