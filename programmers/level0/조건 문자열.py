def solution(ineq, eq, n, m):
    if eq == '=':
        if ineq == '>':
            return int(n >= m)
        else:
            return int(n <= m)
    else:
        if ineq == '>':
            return int(n > m)
        else:
            return int(n < m)
#
def solution(ineq, eq, n, m):
    if eq == '!':
        eq = ''
    return int(eval(f'{n} {ineq}{eq} {m}'))