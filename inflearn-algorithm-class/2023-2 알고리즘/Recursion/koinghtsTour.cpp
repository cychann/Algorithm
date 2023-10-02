#include <iostream>
using namespace std;

int dx[] = { 2, 1, -1, -2, -2, -1, 1, 2 };
int dy[] = { 1, 2, 2, 1, -1, -2, -2, -1 };

bool knightsTour(int x, int y, int counter, int** board, int** path, int m, int n) {
    if (counter == m * n) {
        return true;
    }

    for (int i = 0; i < 8; ++i) {
        int next_x = x + dx[i];
        int next_y = y + dy[i];

        if (0 <= next_x && next_x < m && 0 <= next_y && next_y < n && board[next_x][next_y] == 0) {
            board[next_x][next_y] = 1;
            path[next_x][next_y] = counter + 1;
            if (knightsTour(next_x, next_y, counter + 1, board, path, m, n)) {
                return true;
            }
            board[next_x][next_y] = 0;
        }
    }

    return false;
}

int main() {
    int caseCount;
    cin >> caseCount;

    for (int i = 0; i < caseCount; ++i) {
        int m, n, s, t;
        cin >> m >> n >> s >> t;

        int** board = new int*[m];
        int** path = new int*[m];

        for (int j = 0; j < m; ++j) {
            board[j] = new int[n];
            path[j] = new int[n];
        }

        board[s - 1][t - 1] = 1;
        path[s - 1][t - 1] = 1;

        if (knightsTour(s-1, t-1, 1, board, path, m, n)) {
            cout << 1 << endl;
            for (int row = 0; row < m; ++row) {
                for (int col = 0; col < n; ++col) {
                    cout << path[row][col] << " ";
                }
                cout << endl;
            }
        } else {
            cout << 0 << endl;
        }
    }

    return 0;
}
