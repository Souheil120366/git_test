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

console.log(countConstruct(targetS,WordBank))