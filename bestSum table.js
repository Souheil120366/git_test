function bestSum (target,numbers) {
    const table=Array(target+1).fill(null);
    table[0]=[];
    
    for (let i=0; i <= target; i++) {
        if ( table[i] != null ) {
          for (let num of numbers) {
              const int=table[i+num];
              
              table[i+num]=[...table[i],num];
              if ( int != null) {

                 if ( int.length  < table[i+num].length ) table[i+num]=int;
              }                
               //console.log(i+num,int,table[i+num]);

             
            }  
             
          }
        }
        
    

    return table[target];
} 

target=8;
numbers=[2,3,5];

//target=7
//numbers=[5,3,4,7];

//target=8
//numbers=[1,4,5];

target=100;
numbers=[1,2,5,25];


console.log(bestSum(target,numbers));