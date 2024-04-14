def solution(n, slicer, num_list):
    a,b,c = slicer
    if n == 1:
        num_list = num_list[:b+1]
    elif n == 2:
        num_list = num_list[a:]
    elif n == 3:
        num_list = num_list[a:b+1]
    else:
        num_list = num_list[a:b+1]
        num_list = num_list[::c]
        
    return num_list
        