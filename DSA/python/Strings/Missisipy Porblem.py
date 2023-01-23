# from collections import deque

# class Queue:
#     def __init__(self):
#         self.data = deque()

#     def push(self, val):
#         self.data.appendleft(val)

#     def pop(self):
#         if len(self.data) !=0:
#             return self.data.pop()

st = "mi2s1i2s1i2p1i"
# q= Queue()
# for i in range(len(st)):
#     q.push(st[i])

q = list(st)
loop = 1
new_str = ''
sub_str = ''
for i in range(len(st)):
    popped = q[i]
    if popped.isnumeric():
        new_str += sub_str*loop
        sub_str = ''
        loop = int(popped)
    else:
        sub_str += st[i]

if sub_str != '':
    new_str += sub_str

print(new_str)



        

