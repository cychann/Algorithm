import sys 

def bubbleSorts(arr):
    ans1 = bubbleSort1(arr[:])
    ans2 = bubbleSort2(arr[:])
    ans3 = bubbleSort3(arr[:])
    print(ans1[0], ans1[1], ans2[0], ans2[1], ans3[0], ans3[1])

def bubbleSort1(arr):
    calculation_count, swap_count = 0, 0
    size = arr.pop(0)

    for i in range(1,size):
        for j in range(1, size-i+1):
            calculation_count += 1
            if arr[j-1] > arr[j]:
                (arr[j-1], arr[j]) = (arr[j], arr[j-1])
                swap_count += 1

    return [calculation_count, swap_count]

def bubbleSort2(arr):
    calculation_count, swap_count = 0, 0
    size = arr.pop(0)

    for i in range(1,size):
        swapped = False
        for j in range(1, size-i+1):
            calculation_count += 1
            if arr[j-1] > arr[j]:
                (arr[j-1], arr[j]) = (arr[j], arr[j-1])
                swapped = True
                swap_count += 1

        if swapped == False:
            break

    return [calculation_count, swap_count]

def bubbleSort3(arr):
    calculation_count, swap_count = 0, 0
    size = arr.pop(0)
    lastSwappedIndex = size

    while lastSwappedIndex > 0:
        swappedIndex = 0
        for j in range(1, lastSwappedIndex):
            calculation_count += 1
            if arr[j-1] > arr[j]:
                (arr[j-1], arr[j]) = (arr[j], arr[j-1])
                swappedIndex = j
                swap_count += 1
        lastSwappedIndex = swappedIndex

    return [calculation_count, swap_count]


n = int(sys.stdin.readline());

for i in range(0, n):
    num_list = list(map(int, sys.stdin.readline().split()));
    bubbleSorts(num_list)