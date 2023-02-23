"""
Question - You’re given a two-dimensional array (a matrix) of potentially unequal height & width containing only 0’s & 1’s. Each 0 represents land, and each 1 represents part of a river. 
A river consists of any number of 1’s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1’s forming a river determine its size. 
Note that a river can twist. In other words, it doesn’t have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for example.
Write a function that returns an array of the sizes of all rivers represented in the input matrix. The sizes don’t need to be in any particular order.

"""

def river_sizes(matrix):
    def dfs(i, j):
        if 0 <= i < len(matrix) and 0 <= j < len(matrix[0]) and matrix[i][j] == 1:
            matrix[i][j] = 0
            size = 1
            for row, col in [(i-1, j), (i+1, j), (i, j-1), (i, j+1)]:
                size += dfs(row, col)
            return size
        return 0
    
    sizes = []
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            if matrix[i][j] == 1:
                sizes.append(dfs(i, j))
    return sizes

if __name__ == "__main__":
    matrix = [
        [0,1,0,0,1,1,0,0],
        [0,1,0,0,1,0,0,0],
        [0,1,0,0,1,0,0,0],
        [0,1,0,0,1,0,0,1],
        [0,1,1,1,1,0,1,1]
            ]
    # print(size_of_river(matrix))
    print(river_sizes(matrix))
