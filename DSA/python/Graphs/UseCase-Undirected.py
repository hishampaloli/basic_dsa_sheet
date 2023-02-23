#Undirect Graph
# Facebook Use Case

#User in Graph Data Structure is one of the Vertices/Nodes in Graph

class User:
    def __init__(self,uid,  name, phone, email):
        self.uid = uid
        self.name = name
        self.phone = phone
        self.email = email

    def __repr__(self):
        return f"{self.name}"

#Graph Datastructure:
class Facebook:

    def __init__(self):
        self.users = dict()
        

    #Facebook will add both user to adjacency list
    def connectUser(self, u1, u2):

        # We are checking if users exist as key in dictonary or not
        # If not , add the key and let the value be list  -> friend list 
        if u1 not in self.users:
            self.users[u1] = []
        if u2 not in self.users:
            self.users[u2] = []
        #Add users to friendlist
        if u2 not in self.users[u1]:
            self.users[u1].append(u2)
        if u1 not in self.users[u2]:
            self.users[u2].append(u1)

    def printUsers(self):
        print(self.users)
        print(">> Total Users: ", len(self.users))




def main():
    user1 = User(1, "Renjith", '9895527550', 'renjith@gmail.com')
    user2 = User(2, "Ramu", '9895527551', 'ramu@gmail.com')
    user3 = User(3, "Arun", '9895527552', 'arun@gmail.com')
    user4 = User(4, "Manu", '9895527553', 'manu@gmail.com')
    user5 = User(5, "Maneesh", '9895527554', 'maneeshh@gmail.com')
    user6 = User(6, "Paru", '9895527555', 'paru@gmail.com')
    
    graph = Facebook()
    graph.connectUser(user1, user2)
    graph.connectUser(user1, user3)
    graph.connectUser(user3, user6)
    graph.connectUser(user1, user2)
    graph.connectUser(user4, user5)
    graph.connectUser(user6, user4)
    graph.printUsers()

main()