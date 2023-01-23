import heapq

data = [1, 3, 43, 53 ,12, 53, 90, 56, 13, 65, 43]

heapq.heapify(data)

print(data)

print(heapq.heappop(data))
print(data)  