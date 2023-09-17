def insertionSort(arr):
    calculation_count, swap_count = 0, 0
    n = arr.pop(0)

    for i in range(1, n):
        chk = i
        tmp = arr[i]
        for j in range(i, 0, -1):
            calculation_count += 1
            if (tmp < arr[j-1]):
                arr[j] = arr[j-1]
                swap_count += 1
                chk = j-1
            else:
                break
        arr[chk] = tmp

    print(calculation_count, swap_count)

n = int(input());

for i in range(0, n):
    num_list = list(map(int, input().split()));
    insertionSort(num_list) 
