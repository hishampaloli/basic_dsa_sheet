"""
In Python specifically, Strings are a sequence of Unicode characters. a string is a text or language that we use to converse. 
But machines are not capable to understand text, it only knows binary. 
So first characters are converted to numbers using (Unicode) and then to binary representation.

There are different ways in python to create strings like in single, double, as well as in triple quotes. 
"""

s = 'Hello'  #single quotes
s = "It's raining outside"  #double quotes
s = '''Good Morning
this is renjith
'''  #multi-line strings

a= 33
print(str(a)) #int to str

"""
Accessing Substring from String
"""
#INDEXING

#1) Positive Indexing
s = "Hello"
print(s[0])  #OUTPUT -> H
print(s[5])  # ERROR (index out of range)
print(s[4])  # O/P -> o
print(s[len(s)-1]) #O/P -> o

#2) Negative Indexing
print(s[-1])  #O/P -> o

#SLICING
s = "Hello World"
print(s[1 :  4])  #O/P -> ell
print(s[2:]) #from second index give cmplt string (O/P -> llo World)
print(s[:3]) #from starting till third index (O/P -> Hel)
print(s[:])  #give cmplt string
print(s[0:8:3]) #(O/P -> HlW) 
#in above expression third value represent step means start from zero index and skip two index and take third index till eighth index
print(s[0:6:-1]) #Nothing (while working with +ve index you cannot have -ve step)
print(s[-5 : -1 : 2]) #from -ve five to -ve one and step of 2 (O/P-> Wr)
print(s[::-1])  #reverse string (from start to end in reverse)
print(s[-1:-5:-1]) #reverse string from -1 index to -5 index (O/P -> ldro(reverse of orld))

"""
Editing and Deleting Python Strings

String’s are immutable data types in Python and if you try to edit any string then it will throw a type error. 
It means you cannot edit or add a new character to the existing string But you can reassign it to a different variable means to create a new string. 

"""
s = "Hello World"
s[0] = "M" #does not support Item assignment
a = "M" + s[1:] #It will work to reassign 
print(a) #O/P -> Mello World
#Try deleting
del s[0]    #error
del s[:3:2] #cannot del portion of string
del(s) #It will run successfully but internally it not fully dlt it

"""
Operations on Python String

"""
## Arithmetic Operations
#1 1) Addition(+)
s = "Hello" + "-" + "World"
print(s)  #O/P -> Hello-World

#2 2) Mulitplication
s="Hello"
print(s*5)  #O/P -> HelloHelloHelloHelloHello

## Relational Operations
print("Hello" == "World")  #False
print("Hello" != "World")  #True

print("Mumbai" > "Pune")  #False
print("Goa" < "Indore")  #True

"""
It compares a string lexicographically. 
In the first example, character P comes after M in alphabetical series so the answer is False. 
sometimes people also get confused in lowercase and uppercase so lowercase characters come after uppercase.
"""

## Logical Operations

print("Hello" and "World") #True and True -> True (O/P -> World)
print("" and "World") #False and True -> False (O/P -> "")
print("" or "World")  #False OR True -> True (O/P -> "World")
print(not "Hello")  #opposite of True -> False
print(not "")  #True

## Loops

s = "Hello world"
for i in s:
    print(i)
#second way
for i in s[2:7]:
    print(i)
#third way
i=0
while i<len(s):
    print(i)

## Membership Operators    
s = "Hello world"
if 'o' in s: #Membership operators in Python are in and NOT in which is used to check any element is present in any sequence data structure of Python.
    print("True") 


"""
Python String Functions
"""

s = "Hello"
print(len(s)) #5
print(min(s)) #H
print(max(s)) #o
print(sorted(s)) #['H', 'e', 'l', 'l', 'o']
print(sorted(s, reverse=True)) #['o', 'l', 'l', 'e', 'H']

## Specific Functions

s = "its raining outside"
print(s.capitalize())  #O/P -> Its raining outside
print(s.title())   #O/P -> Its Raining Outside

s = "Its Raining Outside"
print(s.upper())         #O/P -> ITS RAINING OUTSIDE
print(s.lower())         #O/P -> its raining outside
print(s.swapcase())  #O/P -> iTS rAINING oUTSIDE

s = "Its Raining Outside"
print(s.count("i")) #3
print(s.count("ing")) #1

s = "Its Raining Outside"
print(s.find("ing")) #8
print(s.index("ing")) #8
print(s.find("down")) #-1
print(s.index("down")) #error

s = "Its Raining Outside"
print(s.startswith("I")) #True
print(s.endswith("f")) #False

##  Format
print("Hello my name is {} and i live in {}".format("Rahul","Indore"))
print("your height is {height} feet and weight is {weight} kg".format(weight=57, height=5.8))

print("hello20".isalnum()) #True
print("hjuGbh".isalpha()) #True
print("hello2".isalpha()) #False
print("123456".isdigit()) #True

## split function
sent = "I am playing football"
print(sent.split())      # ['I', 'am', 'playing', 'football']
sent2 = "we.sitting.together"
print(sent2.split("."))   # ['we', 'sitting', 'together']

## Join
sent = ['I', 'am', 'playing', 'football']
print(" ".join(sent))
print("-".join(sent))

## Replaces
print(s.replace("20", "")) #hello

## Strip

s = "   hello   "
print(s.strip()) #hello
