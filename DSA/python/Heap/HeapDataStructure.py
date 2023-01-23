def buildHeap(array):
    n = int((len(array)//2) - 1)
    for i in range(n, -1, -1):
        min_heapify(array, i)

def min_heapify(array, k):
    left = 2 * k 
    right = 2 * k + 1
    if left < len(array) and array[left] < array[k]:
        smallest = left
    else:
        smallest = k
    if right < len(array) and array[right] < array[smallest]:
        smallest = right

    if smallest !=k:
        array[smallest], array[k] = array[k], array[smallest]
        min_heapify(array, smallest)

def insert(array, new):
    size = len(array)
    if size == 0:
        array.append(new)
    else:
        array.append(new)
        buildHeap(array)

def delete(array, num):
    size = len(array)
    for i in range(0, len(array)):
        if num == array[i]:
            array[i], array[size -1] = array[size -1], array[i]
            break;
    array.pop()
    buildHeap(array)

if __name__ == "__main__":
    # arr = []
    # insert(arr, 26)
    # insert(arr, 20)
    # insert(arr, 10)
    # insert(arr, 48)
    # insert(arr, 42)
    # insert(arr, 39)
    # insert(arr, 23)
    # insert(arr, 3)
    # delete(arr, 20)
    a = [3, 4, 9, 5, 2]
    buildHeap(a)
    print(a)

