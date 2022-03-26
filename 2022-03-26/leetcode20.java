// # LeetCode 20. Valid Parentheses
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        
        //문자열을 하나씩 char 타입의 배열에 집어넣어준다. 
        char[] arr = s.toCharArray();
        for (char c : arr) {
            if (c == '(' || c == '{' || c == '[') stack.push(c);
            else {
                if (!stack.isEmpty()) {
                    char popChar = stack.pop();
                    if (!isValidParen(c, popChar)) {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }

    private boolean isValidParen(char c, char popChar) {
        return (popChar == '(' && c == ')')
                || (popChar == '{' && c == '}')
                || (popChar == '[' && c == ']');
    }
}