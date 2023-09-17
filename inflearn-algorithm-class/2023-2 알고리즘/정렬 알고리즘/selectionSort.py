def selectionSort(arr):
    calculation_count, swap_count = 0, 0
    n = arr.pop(0)


    size = len(arr)

    for i in range(size):
        min_index = i

        for j in range(i + 1, size):
            calculation_count += 1
            if arr[j] < arr[min_index]:
                min_index = j

        if min_index != i:
            swap_count += 1
            (arr[i], arr[min_index]) = (arr[min_index], arr[i])
    
    print(calculation_count, swap_count)

n = int(input());

for i in range(0, n):
    num_list = list(map(int, input().split()));
    selectionSort(num_list)