n, m = map(int, input().split())
card = list(map(int, input().split()))

for i in range(m):
    card.sort()
    a = card[0]
    b = card[1]
    card[0] += b
    card[1] += a
print(sum(card))
