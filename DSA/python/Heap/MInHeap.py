

# def min_heapfy(A, k):
#     l = left(k)
#     r = right(k)

#     if l < len(A) and A[l]< A[k]:
#         smallest = k
#     else:
#         smallest = r
#     if smallest =!= k 

def max_heapify(A,i):
    l = 2*i + 1
    r = 2*i + 2
    if l < len(A) and A[l] > A[i]:
        largest = l
    else:
        largest = i
    if r < len(A) and A[r] > A[largest]:
        largest = r
    if largest != i:
        A[i], A[largest] = A[largest], A[i]
        max_heapify(A, largest)

def max_heapify_sort(A,n,i):
    l = 2*i + 1
    r = 2*i + 2
    if l < n and A[l] > A[i]:
        largest = l
    else:
        largest = i

    if r < n and A[r] > A[largest]:
        largest = r
    if largest != i:
        A[i], A[largest] = A[largest], A[i]
        max_heapify_sort(A, n, largest)

# def min_heapify_sort(A,n,i):
#     l = 2*i 
#     r = 2*i + 1
#     if l < n and A[l] < A[i]:
#         smallest = l
#     else:
#         smallest = i

#     if r < n and A[r] < A[smallest]:
#         smallest = r
#     if smallest != i:
#         A[i], A[smallest] = A[smallest], A[i]
#         max_heapify_sort(A, n, smallest)

def min_heapify(A, i):
    l = 2*i 
    r = 2*i + 1

    if l < len(A) and A[l] < A[i]:
        smallest = l
    else:
        smallest = i
    
    if r < len(A) and A[r] < A[smallest]:
        smallest = r

    if smallest != i:
        A[i], A[smallest] = A[smallest], A[i]
        min_heapify(A, smallest)

def buildHeap(A):
    n = int((len(A) // 2)-1)
    for k in range(n, -1, -1):
        # max_heapify(A, k)
        min_heapify(A, k)

def build_max_heapify(A):
    n = len(A)
    for i in range(n, -1, -1):
        max_heapify_sort(A, n, i)
    for i in range(n-1, 0, -1):
        A[0], A[i] = A[i], A[0]
        max_heapify_sort(A, n, i)

# def build_min_heapify(A):
#     n = len(A)
#     for i in range(n, -1, -1):
#         min_heapify_sort(A, n, i)
#     for i in range(n-1, 0, -1):
#         A[0], A[i] = A[i], A[0]
#         min_heapify_sort(A, n, i)


A=[11, 6, 5, 90, 8, 2, 2,2, 7, 12, 43]
# build_max_heapify(A)
buildHeap(A)
# build_min_heapify(A)
print(A)