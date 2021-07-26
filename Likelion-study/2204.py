while(True):
    n = int(input())

    if(n == 0):
        break

    word_list = []
    for _ in range(n):
        word_list.append(input())
    word_list.sort(key=lambda x: x.lower())
    print(word_list[0])
