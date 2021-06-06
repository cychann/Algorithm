function solution(array, commands) {
    var answer = [];

    for(let n=0; n<commands.length; n++) {
        let list = array.slice(commands[n][0]-1, commands[n][1]).sort((a,b) => a-b)
        answer.push(list[commands[n][2]-1])
    }
    
    return answer;
}