def max_heapify(array, n ,k):
    left = 2 * k + 1
    right = 2 * k + 2

    if left < n and array[left]> array[k]:
        largest = left
    else:
        largest = k
    if right < n and array[right]> array[largest]:
        largest = right
    if largest != k :
        array[largest], array[k]  = array[k] , array[largest]
        max_heapify(array, n, largest)

def heapsort(array):
    n = len(array)

    for i in range(n//2, -1, -1):
        max_heapify(array, n, i)

    for i in range(n-1, 0, -1):
        array[0], array[i] = array[i], array[0]
        max_heapify(array, i, 0)

if __name__ == "__main__":
    ls = [12, 45, 23, 89, 45, 1, 78, 12]
    heapsort(ls)
    print(ls)
