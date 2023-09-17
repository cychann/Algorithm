import sys, math

def getNextGap(gap):
    gap = (gap * 10)/13
    if gap < 1:
        return 1
    return math.trunc(gap)

def combSort(arr):
    calculation_count, swap_count = 0, 0
    size = arr.pop(0)
    gap = size
    swapped = True

    while gap != 1 or swapped == 1:
        gap = getNextGap(gap)
        swapped = False
        for i in range(0, size-gap):
            calculation_count += 1
            if arr[i] > arr[i + gap]:
                arr[i], arr[i + gap] = arr[i + gap], arr[i]
                swap_count += 1
                swapped = True

    print(calculation_count, swap_count)

n = int(sys.stdin.readline());

for i in range(0, n):
    num_list = list(map(int, sys.stdin.readline().split()));
    combSort(num_list)