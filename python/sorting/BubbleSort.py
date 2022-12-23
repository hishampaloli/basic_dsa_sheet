#bubble sort
def bubble_sort(array):
    size = len(array)
    swapped = False
    for i in range(size):
        for j in range(0, size-1-i):
            if array[j] > array[j+1]:
                array[j], array[j+1] = array[j+1], array[j]
                swapped = True
        if not swapped:
            break;

if __name__ =="__main__":
    list_data = [1, 3, 6, 2, 0, 10]
    bubble_sort(list_data)
    print(list_data)
