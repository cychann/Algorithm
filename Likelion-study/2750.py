n = int(input())

for _ in range(n):
    word = input()
    reversed_str = word[::-1]
    if word == reversed_str:
        print('{} & {} are anagrams.'.format(word, reversed_str))
    else:
        print('{} & {} are NOT anagrams.'.format(word, reversed_str))
