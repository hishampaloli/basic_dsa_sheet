## Replace every character of a string by a different character
"""
Given a string str of lowercase alphabets only.
The task is to replace every character by some new character. 
The new character belongs to $a-z$ (small case only) 
Replacement of str[i] is determined by:

str[i] = Character obtained after traversing ascii(str[i]) no. of characters in ‘a-z’ repeatedly after str[i].

"""
 #Python 3 program for Replace every character of a
# string by a different character
 
# Function to manipulate the string
def manipulateString(str) :
 
    # looping through each character of string
    for i in range(len(str)) :
         
        # storing integer ASCII value of
        # the character in 'asc'
        asc = ord(str[i])
        # print(asc)
 
        # 'rem' contains coded value which
        # needs to be rounded to 26
        rem = asc - (26 - (ord(str[i]) - ord('a')))
 
        # converting 'rem' character in range
        # 0-25 and storing in 'm'
        m  = rem % 26
 
        #printing character by adding ascii value of 'a'
        # so that it becomes in the desired range i
        str[i] = chr(m + ord('a'))
 
    # join method join all individual
    # characters to form a string
    print(''.join(str))
 
# Driver code    
if __name__ == "__main__" :
 
    str = "geeksforgeeks"
 
    # convert string into list of characters
    str = list(str)
 
    # Function calling
    manipulateString(str)
 
  
# This code is contributed by ANKITRAI1