import java.util.LinkedList;
import java.util.Queue;

public class Main {
	public static void main(String [] args ) {
		Solution s = new Solution();

		int m = 6, n = 4;

		int [][] mat = {{1, 1, 1, 0}, {1, 2, 2, 0}, {1, 0, 0, 1}, {0, 0, 0, 1}, {0, 0, 0, 3}, {0, 0, 0, 3}};
	
		int [] answer = s.solution(m, n, mat);

		for (Integer i : answer) System.out.println(i);
	}
}

class Pair {
	
	public int x;
	public int y;
	public Pair(int x, int y) {
		this.x = x;
		this.y = y;
	}
}

class Solution {

	// 상, 하, 좌, 우
	int X[] = {0, 0, -1, 1};
	int Y[] = {-1, 1, 0, 0};

	int [][] mat;
    boolean [][] visited;
    
    public int visitMat(int num, int i, int  j, int m, int n) {
		Queue<Pair> queue = new LinkedList<>();
		int count = 1;
		visited[i][j] = true;
		queue.add(new Pair(i,j));

		while(!queue.isEmpty()) {
			Pair p = queue.poll();
			int x = p.x;
			int y = p.y;
			
			for (int k = 0 ; k < 4 ; k++) {
				int new_x = x + X[k];
				int new_y = y + Y[k];
				if ( new_x >= 0 && new_x < m && new_y >= 0 && new_y < n ) {
					if ( visited[new_x][new_y] == false && mat[new_x][new_y] == num ) {
						queue.add(new Pair(new_x, new_y));
						visited[new_x][new_y] = true;
						count += 1;
					}
				}
			}			
		}
		return count; 
    }

	public int[] solution(int m, int n, int[][] picture) {
        int numberOfArea = 0;
        int maxSizeOfOneArea = 0;
	
		mat = picture;
		visited = new boolean[m][n];
		/*		
		for (int i = 0 ; i < m ; i++) {
			for (int j = 0 ; j < n ; j++) {
				System.out.print(mat[i][j] + " ");
			}
			System.out.println();
		}

		for (int i = 0 ; i < m ; i++) {
			for (int j = 0 ; j < n ; j++) {
				System.out.print(visited[i][j] + " ");
			}
			System.out.println();
		}
		*/
		for (int i = 0 ; i < m ; i++) {
			for (int j = 0 ; j < n ; j++) {
				if ( mat[i][j] != 0 && visited[i][j] == false ) {
					int count = visitMat(mat[i][j], i, j, m, n);
					if ( count > maxSizeOfOneArea ) maxSizeOfOneArea = count;
					numberOfArea += 1;
				}
			}
		}

        int[] answer = new int[2];
        answer[0] = numberOfArea;
        answer[1] = maxSizeOfOneArea;
        return answer;
    }

}
