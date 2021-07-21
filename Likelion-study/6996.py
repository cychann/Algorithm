n = int(input())

for _ in range(n):
    a, b = map(str, input().split())

    a_sort = sorted(list(a))
    b_sort = sorted(list(b))

    if a_sort == b_sort:
        print('{} & {} are anagrams.'.format(a, b))
    else:
        print('{} & {} are NOT anagrams.'.format(a, b))
