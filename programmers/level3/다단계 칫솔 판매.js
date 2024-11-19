function solution(enroll, referral, seller, amount) {
  /*
    발생하는 이익에서 10%를 조직에 참여시킨 추천인에게 배분
    단 10%를 계산한 금액이 1원 미만인 경우는 이득을 분배하지 않고 자신이 모두 가짐.
    */

  /*
    트리 형태의 관계 구조를 정립해야함 or 추천인을 타고타고 갈 수 있도록 연결되어 있는 형태의 데이터 구조가 필요
    트리까진 필요 없을 거 같고, 객체 형태로 매핑만 되면 될듯.
    */

  const memberLegnth = enroll.length;
  const sellerLength = seller.length;

  const relation = {};

  for (let i = 0; i < memberLegnth; i++) {
    relation[enroll[i]] = referral[i];
  }

  const result = {};
  for (let name of enroll) {
    result[name] = 0;
  }

  for (let i = 0; i < sellerLength; i++) {
    let currSeller = seller[i];
    let price = amount[i] * 100;

    while (price > 0 && currSeller !== "-") {
      // 10%를 때고 result를 업데이트 해야함.
      result[currSeller] += price - Math.floor(price / 10);

      currSeller = relation[currSeller];
      price = Math.floor(price / 10);
    }
  }

  return enroll.map((name) => result[name]);
}
