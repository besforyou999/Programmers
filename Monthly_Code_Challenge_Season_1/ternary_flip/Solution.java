class Solution {
    public int solution(int n) {
        String ternary = toTernary(n);
        String reverseTernary = reverseStr(ternary);
        return toDecimal(reverseTernary);
    }

    public String toTernary(Integer n) {
        String num = "";
        do {
            Integer remainder = n % 3;
            n /= 3;
            num = remainder.toString() + num;
        } while( n != 0 );
        return num;
    }

    public String reverseStr(String str) {
        StringBuffer sb = new StringBuffer(str);
        return sb.reverse().toString();
    }

    public Integer toDecimal(String str) {
        double ans = 0;
        int len = str.length();
        for (int i = 0 ; i < len ; i++) {
            int num = str.charAt(len - i - 1) - '0';
            ans += Math.pow(3, i) * num;
        }
        return (int)ans;
    }
}
