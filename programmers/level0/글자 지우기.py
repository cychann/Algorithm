def solution(my_string, indices):
    indices.sort(reverse=True)
    
    for indice in indices:
        my_string = my_string[:indice] + my_string[indice+1:]
        
    return my_string