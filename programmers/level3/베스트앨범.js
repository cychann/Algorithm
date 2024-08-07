function solution(genres, plays) {
  // 장르별 총 재생 횟수를 저장하는 Map
  // 장르별 고유 번호의 재생 횟수를 저장하는 Map
  const result = [];

  const genreTotalMap = new Map();
  const genreIdMap = new Map();

  for (let i = 0; i < plays.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    genreTotalMap.set(genre, (genreTotalMap.get(genre) || 0) + play);
    const genreData = genreIdMap.get(genre) || [];
    genreData.push({ id: i, play });
    genreIdMap.set(genre, genreData);
  }

  // 배열로 전환할때 내가 짯던 코드

  const genreTotalMapToArr = [...genreTotalMap];
  genreTotalMapToArr.sort((a, b) => b[1] - a[1]);

  genreTotalMapToArr.forEach((genre) => {
    const extractedGenreData = genreIdMap.get(genre[0]);

    extractedGenreData.sort((a, b) => b.play - a.play);
    extractedGenreData.slice(0, 2).forEach((data) => {
      result.push(data.id);
    });
  });

  return result;

  // 더 간결한 코드
  return [...genreTotalMap]
    .sort((a, b) => b[1] - a[1])
    .flatMap(([genre]) =>
      genreIdMap
        .get(genre)
        .sort((a, b) => b.play - a.play || a.id - b.id)
        .slice(0, 2)
        .map((data) => data.id)
    );
}

// 풀이 2 (24.08.07)
function solution(genres, plays) {
  // 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시
  const genreObj = {};
  const playObj = {};
  const result = [];

  for (let i = 0; i < plays.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!genreObj[genre]) {
      genreObj[genre] = {};
      playObj[genre] = 0;
    }

    genreObj[genre][i] = play;
    playObj[genre] += play;
  }

  const sortedPlayObj = Object.keys(playObj).sort(
    (a, b) => playObj[b] - playObj[a]
  );

  for (const genre of sortedPlayObj) {
    const sortedGenreObj = Object.keys(genreObj[genre]).sort(
      (a, b) => genreObj[genre][b] - genreObj[genre][a]
    );
    result.push(...sortedGenreObj.splice(0, 2).map((song) => +song));
  }

  return result;
}
