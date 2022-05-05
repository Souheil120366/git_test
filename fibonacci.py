calculated={}
def fibonacci(n):
    print(n,calculated)
    if n==0:
        return 0
    if n==1:
        return 1
    
    if n in calculated:
         return calculated[n]
    else:
        calculated[n]=fibonacci(n-1)+fibonacci(n-2)
    
        return calculated[n]




print(fibonacci(8)) 

