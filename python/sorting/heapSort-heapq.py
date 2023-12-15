import heapq

def heapsort(elem):
    heap = []
    for ele in elem:
        heapq.heappush(heap, ele)
    
    ordered = []
    while heap:
        ordered.append(heapq.heappop(heap))

    return ordered

if __name__ == "__main__":
    ll = [54, 65, 12, 63, 6, 34, 87, 12]
    print(heapsort(ll))