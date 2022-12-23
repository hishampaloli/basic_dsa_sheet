def selectionSort(array):
    size = len(array)
    for step in range(size):
        min_idx = step
        for i in range(step + 1, size):
            #sort element using "<" or ">"
            if array[i]< array[min_idx]:
                min_idx = i
        
        #swap min at correction postion
        array[step] , array[min_idx] = array[min_idx], array[step]
    return array

data = [1, 5, -4, 5, 1, 3, 0, -4, 1, 5, 44, 9]
print(selectionSort(data))