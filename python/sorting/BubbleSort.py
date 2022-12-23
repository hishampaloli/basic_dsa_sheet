
def bubbleSort(data):
    for i in range(len(data)):
        swapped = False
        for j in range(i+1, len(data)):
            #change "<" ">" to sort acending and desending
            if data[j] < data[i]:
                temp = data[i]
                data[i] = data[j]
                data[j] = temp
                swapped = True
                
        if not swapped:
            break;
    return data

data = [1, 3, 4 ,7, 1, -5, 6, 2, 10, -2, -2, -2]

print(bubbleSort(data))