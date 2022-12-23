#selction sort
def selectionSort(array):
    for i in range(len(array)-1):
        for j in range(i+1, len(array)):
            if array[i] > array[j]:
                array[j], array[i] = array[i], array[j]

if __name__ == "__main__":
    array = [4, 5, 12, 5, 78, 16, 34, 1, 90, -90]
    selectionSort(array)
    print(array)