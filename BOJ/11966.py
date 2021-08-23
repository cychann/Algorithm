n = int(input())
num_list = []

for i in range(31):
    num_list.append(2**i)

if n in num_list:
    print(1)
else:
    print(0)
