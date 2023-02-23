def swap(a, b, arr):
    if a!=b :
        arr[a], arr[b] = arr[b], arr[a]

def partition(elements, start , end):
    pivot_index = start
    pivot = elements[pivot_index]

    while (start < end):

        while start < len(elements) and elements[start] <= pivot :
            start +=1

        while elements[end] > pivot:
            end -=1
        
        if start < end:
            swap(start, end, elements)
        
    swap(pivot_index,end, elements)

    return end

def quick_sort(elements, start ,end):
    if start < end:
        pi = partition(elements,start ,end)
        quick_sort(elements, start, pi -1) # left portion
        quick_sort(elements, pi+1, end) # right partition

if __name__ == "__main__":
    ele = [11, 45, 29, 1, 6, 35]
    quick_sort(ele, 0, len(ele)-1)
    print(ele)