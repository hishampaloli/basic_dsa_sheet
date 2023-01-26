

class Node:
   """
   Class representing a singular node in a suffix tree
   """
   def __init__(self, set_label):
       self.node_lab = set_label
       self.nexts = {}

class SuffixTreeBruteForce:
   """
   This implementation takes O(M^2) time to build the suffix tree and consumes O(M) Nodes (<= 2 * M - 1)
   """
   def __init__(self, s):
       """
       Build Suffix Tree here
       """
       # add a char that didn't occur earlier in the text like '$' to the end
       s += '$'
       
       # creating root of our suffix tree
       self.root = Node(None)
       
       for i in range(len(s)):
           # insert individual suffixes [i, len(s) - 1]
           curr = self.root
           j = i
           while(j < len(s)):
               if s[j] in curr.nexts:
                   child = curr.nexts[s[j]]
                   label = child.node_lab
                   
                   # check if the current node label is entirely consumed by the suffix
                   k = j
                   label_end = False
                   while(k - j < len(label)):
                       if(k == len(s)):
                           # suffix comes short of the label's length
                           label_end = True
                           break
                       elif(s[k] == label[k-j]):
                           # we keep checking for matching character in suffix with node label
                           k += 1
                       else:
                           # we reached a mismatch in the label
                           # prompting us to make introduce two new nodes
                           label_end = True
                           break
                   
                   if label_end:
                       # special case, here we create two new nodes
                       # we create a node here with the left half of the label (the part that matched) and replace the child node's position with it
                       curr.nexts[s[j]] = Node(label[:k-j])
                       
                       # the new position of the child node is as child of the previosly created node
                       curr.nexts[s[j]].nexts[label[k-j]] = child
                       # it's label is now the right part of label(the unmatched part)
                       child.node_lab = label[k-j:]
                       
                       # we also create another Node containing the unmatched part of the suffix
                       curr.nexts[s[j]].nexts[s[k]] = Node(s[k:])
                       break
                   else:
                       # the whole node was consumed and we move to it's child
                       curr = child
                       j = k
               else:
                   # no child found, create child and end execution
                   curr.nexts[s[j]] = Node(s[j:])
                   break
   
   def findSubstring(self, s):
       """
       function traces through the Suffix Tree for the given string
       and returns true if the string is found, the time complexity for this function is O(len(s))
       """
       curr = self.root
       i = 0
       while(i < len(s)):
           if s[i] in curr.nexts:
               child = curr.nexts[s[i]]
               label = child.node_lab
               
               k = i
               while(k - i < len(label)):
                   if(k == len(s)):
                       # string ends in the middle of label
                       return True
                   elif(s[k] == label[k-i]):
                       # we keep checking for matching character with node label
                       k += 1
                   else:
                       # mismatch
                       return False
               curr = child
               i = k
           else:
               return False
       return True
s = 'auvha jufuvh fuouhkv ovnshdck vhacakd falhvb'
p = SuffixTreeBruteForce(s)
print(p.findSubstring('vha'))
print(p.findSubstring('fuouhkv ovnsdck'))
print(p.findSubstring(' falhvb'))