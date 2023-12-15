def insertionSort(array):
    for i in range(1,len(array)):
        while array[i-1] < array[i] and i > 0:
            array[i-1], array[i] = array[i], array[i-1]
            i-=1

if __name__ == "__main__":
    data_items = [11, 4, 56, 3, 12, 73, 12, 9]
    insertionSort(data_items)
    print(data_items)