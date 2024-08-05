function solution(bridge_length, weight, truck_weights) {
  /*
    
    - 다리에는 트럭이 최대 bridge_length대 올라갈 수 있음
    - 트럭 하나만 다리를 건너도 최소 bridge_length대 만큼 경과 시간이 걸림
    - 다리는 최대 weight 이하까지의 무게 견딤
    
    */

  const firstTruck = truck_weights.pop();
  const bridge = [firstTruck];
  let currWeight = firstTruck;
  let time = 1;

  while (bridge.length > 0) {}
}
