function solution(a, b) {
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let dateStr = "2016-" + a + "- " + b;
  let date = new Date(dateStr);
  return week[date.getDay()];
}
