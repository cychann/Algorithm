function solution(cacheSize, cities) {
  let cache = [];
  let runTime = 0;
  cities.map((city) => {
    city = city.toUpperCase();
    if (cache.includes(city)) {
      runTime++;
      cache.splice(cache.indexOf(city), 1);
    } else runTime += 5;

    cache.push(city.toUpperCase());
    if (cache.length > cacheSize) cache.splice(0, 1);
  });

  return runTime;
}
