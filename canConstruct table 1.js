function canConstruct(targetS,WordBank) {
    
   

    for ( let st of WordBank ) {
        
        size=st.length;
        if ( targetS.startsWith(st)) {
           suffix = targetS.substr(size);
           let i=0;
           while ( i < WordBank.length ) {
              st1=WordBank[i];
              size1=st1.length;
              if ( suffix.startsWith(st1) & suffix.length > 0 ) { 
                   suffix=suffix.substr(size1);
                   i=0;
              }
              //console.log(suffix);
              if ( suffix=="" ) return true; 
              i=i+1;
           }
           
           
           
        }   
    }
    
    return false;
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