def solution(todo_list, finished):
    result = []
    for i in range(len(todo_list)):
        if finished[i] == False:
            result.append(todo_list[i])
    
    return result

# 다른 풆이
def solution(todo_list, finished):
    return [work for idx, work in enumerate(todo_list) if not finished[idx]]