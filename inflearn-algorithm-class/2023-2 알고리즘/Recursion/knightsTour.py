import sys

dx = [1, 2, 2, 1, -1, -2, -2, -1]
dy = [2, 1, -1, -2, -2, -1, 1, 2]

def knightsTour(x, y, counter, board, path, m, n):
    if counter == m * n:
        return True
    
    for i in range(8):
        next_x = x + dx[i]
        next_y = y + dy[i]

        if 0 <= next_x < m and 0 <= next_y < n and board[next_x][next_y] == 0:
            board[next_x][next_y] = 1
            path[next_x][next_y] = counter + 1
            if knightsTour(next_x, next_y, counter + 1, board, path, m, n):
                return True
            board[next_x][next_y] = 0

    return False


case = int(sys.stdin.readline())
for _ in range(case):
    m, n, s, t = map(int, sys.stdin.readline().split())

    board = [[0] * n for _ in range(m)]
    path = [[0] * n for _ in range(m)]

    board[s-1][t-1] = 1
    path[s-1][t-1] = 1

    if knightsTour(s, t, 1, board, path, m, n):
        print(1)
        for row in path:
            print(" ".join(map(str, row)))
    else:
        print(0)

