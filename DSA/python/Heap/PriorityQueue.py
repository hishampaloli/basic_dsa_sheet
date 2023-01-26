def build_maxHeap(array):
    n = int(len(array)//2)-1 
    for k in range(n, -1, -1):
        max_heapify(array, k)

def max_heapify(array, k):
    left = 2 * k + 1
    right = 2 * k + 2

    if len(array)> left and array[left][0] > array[k][0]:
        largest = left
    else:
        largest = k

    if len(array)> right and array[right][0]> array[largest][0]:
        largest = right

    if largest != k:
        array[k], array[largest] = array[largest] , array[k]
        max_heapify(array, largest)


def delete_max(array):
    if len(array) == 0:
        print("empty")
        return
    root = array[0]
    array[0] , array[len(array)-1] = array[len(array)-1] , array[0]
    array.pop()
    build_maxHeap(array)
    return root

if __name__ == "__main__":
    A = [(0, "renjith"), (2, "kerala"), (4, "india"), (7,"tamil"), (6, "kannur"), (5, "karnataka"), (11, "orisa")]
    build_maxHeap(A)
    for i in range(len(A)):
        print(delete_max(A))
