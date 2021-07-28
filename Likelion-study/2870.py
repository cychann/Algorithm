import re

n = int(input())
num_list = []

for i in range(n):
    word = input()
    num_in_word = re.findall("\d+", word)
    num_list += num_in_word
    num_list = list(map(int, num_list))
    num_list.sort()

for i in num_list:
    print(i)
