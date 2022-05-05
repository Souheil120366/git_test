import os
import sys

def solve(C,G) :
    minLost = {}
    def getMinLost(housesToVisit) :
#        print("getMinLost %s :" % str(housesToVisit))
        if not housesToVisit :
            return 0,1
        
        key = frozenset(housesToVisit)
        if key in minLost :
            return minLost[key]
        
        a = housesToVisit.pop()
        # Do not visit house a
        lost, nb = getMinLost(housesToVisit)
        lost += C[a]
        # Visit house a
        lostHouses = set(b for b in G[a] if b in housesToVisit)
        lostMoney = sum(C[b] for b in lostHouses)
        losta, nba = getMinLost(housesToVisit - lostHouses)
        losta += lostMoney
        housesToVisit.add(a)
        
        if losta < lost :
            lost, nb = losta, nba
        elif losta == lost :
            nb += nba
        
        minLost[key] = (lost,nb)
        return minLost[key]
    
    amount, number = getMinLost(set(range(len(C))))
    return sum(C)-amount, number
    
    
N,M = map(int,input().split())
C = tuple(map(int,input().split()))
G = {a : set() for a in range(len(C))}
for _ in range(M) :
    a,b = map(int,input().split())
    G[a-1].add(b-1)
    G[b-1].add(a-1)
print(" ".join(map(str,solve(C,G))))