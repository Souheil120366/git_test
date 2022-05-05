function allConstruct(targetS,WordBank, memo={}) {
    if ( targetS in memo ) return memo[targetS];
    if ( targetS == '' ) return [[]];
   
    let rep=[]; 
    //let sol=[];
    for ( let st of WordBank ) {
       
        size=st.length;
        if ( targetS.startsWith(st)) {
           suffix = targetS.substr(size);
           
           sol=allConstruct(suffix,WordBank,memo);
           //console.log(sol);
           ans=sol.map(el => [st, ...el]);
           
           rep.push(...ans);
          
        }   
    }
   
    memo[targetS]=rep; 
    return rep;
}

targetS="abcdef";
WordBank=["ab","abc","cd","def","abcd","ef"];

targetS="skateboard";
WordBank=["bo","rd","ate","t","ska","sk","boar"];

//targetS="enterapotentpot";
//WordBank=["a","p","ent","enter","ot","o","t"];

targetS="purple";
WordBank=["purp","p","ur","le","purpl"];

//targetS="eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef";
//WordBank=["e","ee","eee","eeee","eeeee","eeeeee"];

arr=[1,2,3];
arr[10]=5;
console.log(arr);

//console.log(allConstruct(targetS,WordBank))