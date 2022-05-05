import os
import sys

def solve(money,roads) :
    minLost = {}
    def getMinLost(housesToVisit) :
#        print("getMinLost %s :" % str(housesToVisit))
        if not housesToVisit :
            return 0,1
        
        key = frozenset(housesToVisit)
        print(key)
        print('housestovisit',housesToVisit)
        if key in minLost :
            print('key',key)
            print('minlost',minLost)
            return minLost[key]
        
        a = housesToVisit.pop()
        print('a',a)
        # Do not visit house a
        lost, nb = getMinLost(housesToVisit)
        lost += money[a]
        # Visit house a
        lostHouses = set(b for b in roads[a] if b in housesToVisit)
        lostMoney = sum(money[b] for b in lostHouses)
        losta, nba = getMinLost(housesToVisit - lostHouses)
        losta += lostMoney
        housesToVisit.add(a)
        
        if losta < lost :
            lost, nb = losta, nba
        elif losta == lost :
            nb += nba
        
        minLost[key] = (lost,nb)
        return minLost[key]
    
    amount, number = getMinLost(set(range(len(money))))
    return sum(money)-amount, number
    
    
N,M = map(int,input().split())

money = tuple(map(int,input().split()))
print('money',money)
roads = {a : set() for a in range(len(money))}
print('roads',roads)
for _ in range(M) :
    a,b = map(int,input().split())
    roads[a-1].add(b-1)
    roads[b-1].add(a-1)
print('roads',roads)    
print(" ".join(map(str,solve(money,roads))))