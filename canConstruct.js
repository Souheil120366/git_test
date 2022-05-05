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

console.log(canConstruct(targetS,WordBank))