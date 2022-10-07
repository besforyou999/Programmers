#include <algorithm>
#include <string>
#include <vector>
#include <iostream>

using namespace std;

int solution(vector<vector<int> > triangle) {
    int answer = 0;
	int SIZE = triangle.size();

	vector<vector<int> > mat(SIZE, vector<int>(SIZE));
	
	mat[0][0] = triangle[0][0];

	for (int i = 1 ; i < SIZE ; i++) {
		for (int j = 0 ; j < i + 1 ; j++) {
			if (j == 0) {
				mat[i][j] = mat[i-1][j] + triangle[i][j]; 
			} else if (j == i) {
				mat[i][j] = mat[i-1][j-1] + triangle[i][j]; 
			} else {
				int up = mat[i-1][j-1];
				int down = mat[i-1][j];
				mat[i][j] = triangle[i][j] +  max(up, down);
			}
		}
	}
		

	for (int i = 0 ; i < SIZE ; i++) 
		for (int j = 0 ; j < i + 1 ; j++) 
			if (mat[i][j] > answer) answer = mat[i][j];

    return answer;
}


int main(void) {
	
	vector<vector<int> > tri;
	vector<int> v1 = {7};
	vector<int> v2 = {3, 8};
	vector<int> v3 = {8, 1, 0};
	vector<int> v4 = {2, 7, 4, 4};
	vector<int> v5 = {4, 5, 2, 6, 5};

	tri.push_back(v1);
	tri.push_back(v2);
	tri.push_back(v3);
	tri.push_back(v4);
	tri.push_back(v5);

	cout << solution(tri);
	return 0;		
}

