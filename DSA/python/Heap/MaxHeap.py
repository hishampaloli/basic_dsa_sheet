def build_max_heap(array):
    n = int(len(array)//2) -1
    for k in range(n, -1, -1):
        max_heapify(array, k)

def max_heapify(array: list, k: int):
    left = 2*k + 1
    right = 2*k + 2
    if len(array)> left and array[left]> array[k]:
        largest = left
    else:
        largest = k
    if len(array)> right and array[right] > array[largest]:
        largest = right
    if largest != k:
        array[largest], array[k] = array[k], array[largest]
        max_heapify(array, largest)

def insert(array, data: int):
    array.append(data)
    build_max_heap(array)

def delete(array, data: int):
    array.remove(data)
    build_max_heap(array)
        


if __name__ == "__main__":
    A=[10, 23, 45, 90, 43, 12, 52,89]
    build_max_heap(A)
    insert(A, 50)
    delete(A, 23)
    print(A)















# def min_heapfy(A, k):
#     l = left(k)
#     r = right(k)

#     if l < len(A) and A[l]< A[k]:
#         smallest = k
#     else:
#         smallest = r
#     if smallest =!= k 

# def max_heapify(A,i):
#     l = 2*i + 1
#     r = 2*i + 2
#     if l < len(A) and A[l] > A[i]:
#         largest = l
#     else:
#         largest = i
#     if r < len(A) and A[r] > A[largest]:
#         largest = r
#     if largest != i:
#         A[i], A[largest] = A[largest], A[i]
#         max_heapify(A, largest)

# def max_heapify_sort(A,n,i):
#     l = 2*i + 1
#     r = 2*i + 2
#     if l < n and A[l] > A[i]:
#         largest = l
#     else:
#         largest = i

#     if r < n and A[r] > A[largest]:
#         largest = r
#     if largest != i:
#         A[i], A[largest] = A[largest], A[i]
#         max_heapify_sort(A, n, largest)

# # def min_heapify_sort(A,n,i):
# #     l = 2*i 
# #     r = 2*i + 1
# #     if l < n and A[l] < A[i]:
# #         smallest = l
# #     else:
# #         smallest = i

# #     if r < n and A[r] < A[smallest]:
# #         smallest = r
# #     if smallest != i:
# #         A[i], A[smallest] = A[smallest], A[i]
# #         max_heapify_sort(A, n, smallest)

# def min_heapify(A, i):
#     l = 2*i 
#     r = 2*i + 1

#     if l < len(A) and A[l] < A[i]:
#         smallest = l
#     else:
#         smallest = i
    
#     if r < len(A) and A[r] < A[smallest]:
#         smallest = r

#     if smallest != i:
#         A[i], A[smallest] = A[smallest], A[i]
#         min_heapify(A, smallest)

# def buildHeap(A):
#     n = int((len(A) // 2)-1)
#     for k in range(n, -1, -1):
#         # max_heapify(A, k)
#         min_heapify(A, k)

# def build_max_heapify(A):
#     n = len(A)
#     for i in range(n, -1, -1):
#         max_heapify_sort(A, n, i)
#     for i in range(n-1, 0, -1):
#         A[0], A[i] = A[i], A[0]
#         max_heapify_sort(A, n, i)

# # def build_min_heapify(A):
# #     n = len(A)
# #     for i in range(n, -1, -1):
# #         min_heapify_sort(A, n, i)
# #     for i in range(n-1, 0, -1):
# #         A[0], A[i] = A[i], A[0]
# #         min_heapify_sort(A, n, i)


# A=[11, 6, 5, 90, 8, 2, 2,2, 7, 12, 43]
# # build_max_heapify(A)
# buildHeap(A)
# # build_min_heapify(A)
# print(A)