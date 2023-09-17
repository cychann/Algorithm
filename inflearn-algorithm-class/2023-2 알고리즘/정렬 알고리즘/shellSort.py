import sys, math

def shellSort(arr):
    calculation_count, swap_count = 0, 0
    size = arr.pop(0)
    gap = math.trunc(size/2)
    
    while gap > 0:
        for i in range(gap, size):
            temp = arr[i]
            j = i
            calculation_count += 1
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j - gap]
                j -= gap
                calculation_count += 1  
                swap_count += 1  
                if j < gap:
                    calculation_count -= 1
            arr[j] = temp
        gap = math.trunc(gap/2)

    print(calculation_count, swap_count)

n = int(sys.stdin.readline());

for i in range(0, n):
    num_list = list(map(int, sys.stdin.readline().split()));
    shellSort(num_list)