function canConstruct(targetS,WordBank) {
    const table=Array(targetS.length+1).fill(false);
    table[0]=true;
    
    for (let i=0; i < targetS.length; i++) {
        if ( table[i] == true ) {
            const suffix = targetS.substr(i);
            for ( let word of WordBank ) {
               
               if ( suffix.startsWith(word)) {
                   table[i+word.length]=true;
                   
               }    
            }
        } 
        
    
    }
    
    return table[targetS.length];
}

targetS="abcdef";
WordBank=["ab","abc","cd","def","abcd","ef"];

targetS="skateboard";
WordBank=["bo","rd","ate","t","ska","sk","boar"];

targetS="enterapotentpot";
WordBank=["a","p","ent","enter","ot","o","t"];

targetS="purple";
WordBank=["purp","p","ur","le","purpl"];

targetS="eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef";
WordBank=["e","ee","eee","eeee","eeeee","eeeeee"];



console.log(canConstruct(targetS,WordBank))