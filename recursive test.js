function fib (n, memo={}) {
    if ( n <= 2 ) { return 1 }
    else {
      if ( n in memo ) { return memo[n] }
      else {
        memo[n]=fib(n-1,memo)+fib(n-2,memo)
        return memo[n]
      }
    }
  }

function fib2 (n) {
    const table=Array(n+1).fill(0);
    table[1]=1;
    for (let i=2; i <= n; i++) {
        table[i]=table[i-1]+table[i-2];
    }
    return table[n];
}  

function GridTraveller(m,n, memo={}) {
    const key = m + "," + n
    const r_key = n + "," + m
    if ( n == 0 || m == 0 ) { return 0 }
    if ( n == 1 & m == 1 ) { return 1 }
    if ( (key || r_key) in memo ) { return memo[key] }
    else {
       memo[key] = GridTraveller(m-1,n,memo) + GridTraveller (m,n-1,memo)  
       return memo[key]
    }
}  

function factorielle (n) {
    if ( n== 0 || n==1 ) {return 1} 
    else { return n*factorielle(n-1)}
}

function CanSum(targetSum,numbers, memo={}) {
    if ( targetSum in memo ) return memo[targetSum];
    if ( targetSum  == 0 ) return true;
    if ( targetSum < 0 ) return false;
    
    for ( num of numbers  ) {
        const remainder=targetSum - num
        
        if ( CanSum(remainder,numbers,memo) == true ) { 
            memo[targetSum]= true
            return true
          }
         
                
    }

    memo[targetSum]= false
    return false 
   
}

function HowSum(targetSum,numbers,memo={}) {
    if ( targetSum in memo )  {console.log(memo[targetSum]); return memo[targetSum] }
    if ( targetSum  == 0 )  return [];
        
    if ( targetSum < 0 )  return null;

       
    for ( let num of numbers  ) {
        remainder=targetSum - num;
        result=HowSum(remainder,numbers,memo);
        
        if ( result !== null ) {
            memo[targetSum]=[ ...result , num ];
            console.log(memo[targetSum]);
            return memo[targetSum]; 
            
        }    
                
    }
   
    memo[targetSum]=null;
    return null;
   
}



function bestSum(targetSum,numbers,memo={}) {
    if ( targetSum in memo )  return memo[targetSum];
    if ( targetSum  == 0 )  return [];
    if ( targetSum < 0 )  return null;

    let shortestcomb=null;
    
    for ( let num of numbers  ) {
        remainder=targetSum - num;
        result=bestSum(remainder,numbers,memo);
        
        if ( result !== null ) {
            comb = [ ...result , num ];
            //memo[targetSum]=comb;
           
            if ( shortestcomb == null || comb.length < shortestcomb.length ) { shortestcomb=comb; }
            
        }    
                
    }
   
    memo[targetSum]=shortestcomb;
    return shortestcomb;
   
}

function canConstruct(targetS,WordBank,memo={}) {
    if ( targetS in memo ) return memo[targetS];
    if ( targetS == '' ) return true;
   

    for ( let st of WordBank ) {
        //pos=targetS.search(st);
        size=st.length;
        if ( targetS.startsWith(st)) {
           remainder = targetS.substr(size);
           //console.log(remainder);
           if (canConstruct(remainder,WordBank,memo) == true ) {
              memo[targetS] = true;
              return memo[targetS];
           }
        }   
    }
    memo[targetS]=false;
    return false;
}

function countConstruct(targetS,WordBank, memo={}) {
    if ( targetS in memo ) return memo[targetS];
    if ( targetS == '' ) return 1;
   
    let counter=0; 
    for ( let st of WordBank ) {
       
        size=st.length;
        if ( targetS.startsWith(st)) {
           suffix = targetS.substr(size);
           numbways=countConstruct(suffix,WordBank,memo);
           counter = counter + numbways;
           memo[targetS] = counter;
          
        }   
    }

    memo[targetS] = counter;
    return counter;
}


//m=18
n=50

console.log(fib2(n));
targetSum=100
arr=[1,2,5,25]

targetS="abcdef";
WordBank=["ab","abc","cd","def","abcd","ef"];

//targetS="skateboard";
//WordBank=["bo","rd","ate","t","ska","sk","boar"];

targetS="enterapotentpot";
WordBank=["a","p","ent","enter","ot","o","t"];

//targetS="purple";
//WordBank=["purp","p","ur","le","purpl"];

targetS="eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef";
WordBank=["e","ee","eee","eeee","eeeee","eeeeee"];

//console.log("fib",n," = ",fib(n))
//console.log("Grid => n = ",n," m = ",m," is ", GridTraveller(m,n))
//console.log("factorielle ",n," ==> ",factorielle(n))
//console.log(CanSum(targetSum,arr))
//console.log(bestSum(targetSum,arr))
//console.log(canConstruct(targetS,WordBank))
//console.log(countConstruct(targetS,WordBank))