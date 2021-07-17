w_score = []
k_score = []

for _ in range(10):
    w_score.append(int(input()))

for _ in range(10):
    k_score.append(int(input()))

w_score.sort(reverse=True)
k_score.sort(reverse=True)
print(w_score[0] + w_score[1] + w_score[2],
      k_score[0] + k_score[1] + k_score[2])
