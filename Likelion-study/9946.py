T = 0

while(True):
    T += 1
    a = input()
    b = input()

    if(a == 'END' and b == 'END'):
        break

    a_sort = sorted(list(a))
    b_sort = sorted(list(b))

    if a_sort == b_sort:
        print("Case {}: same".format(T))
    else:
        print("Case {}: different".format(T))
