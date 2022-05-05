import { execSync } from "child_process";

function demandingMoney(money, roads) {
    
   let house_numb=money.length;
   //let roads_numb=roads.length; 
   let max_amount=0;
   let numb_poss=1;
   let no_roads=[];
   let ans=0;
   let sum=0;
   let max_sum=0;
   let indice=0;
   let arr = Array.from(
    {length: house_numb},
    (item, index) => item = index + 1
    );
 
   let comb=[];
   let no_roads_houses=[];
   let no_r_h=[];
   let tmp=[];
   let found=false;

   comb=combine(arr);

   
   for (let i=0; i < comb.length; i++) {
      found=findArray(comb[i],roads);
      if ( !found ) {
          no_roads.push(comb[i]);
      }
   };

   console.log('no roads',no_roads);
   if ( no_roads.length <= 1) { no_roads_houses=no_roads}
   else {no_roads_houses=noRoadsHouses(no_roads);}

   for (let i=0; i < house_numb; i++) {
       
    if (money[i] > max_amount) {max_amount=money[i]; ans=max_amount; numb_poss=1}
    else { if ( money[i] == max_amount) {numb_poss+=1}}
}

for (let i=0; i < no_roads_houses.length; i++) {
    sum=0;
    for (let j=0; j < no_roads_houses[i].length; j++) {
        sum=sum+money[no_roads_houses[i][j]-1];
    }
    if ( sum >= max_sum ) {
        max_sum=sum;
        console.log(max_amount);
        if (max_sum==max_amount) {numb_poss+=1;ans=max_sum;}
        else { if (max_sum > max_amount) {max_amount=max_sum; ans=max_amount; numb_poss=1;}}
        
    }
     
  
}

   function noRoadsHouses(no_roads) {

    //let i=0;
    //let rep=no_roads[i][0];
    //while ( i < no_roads.length & no_roads[i][0] == rep ) {
    for (let i=0; i < no_roads.length ;i++) {  
      let j=i;
      let rep1=no_roads[j][1];
      while ( j < no_roads.length ) { 
          if ( no_roads[j][0] != rep1 ) { j=j+1 }
          else { break }
          }
      //console.log('j',j);
      let f=j;
      while ( f < no_roads.length ) {
        if ( no_roads[f][0] == rep1 ) {
        index=genIndex(no_roads,f)[0];
        traiter(no_roads,i,index);
        }
        f=f+1;
        //console.log('f',f);
      }
      
      //console.log('i',i);
      //console.log('rep',rep);
    }
   
     
    
      
        console.log(no_roads_houses);  
        
        for (let i=0; i < no_roads_houses.length; i++) {
            comb=combine(no_roads_houses[i]);
            
            j=0;
            while ( j < comb.length  ) {
                
                found=findArray(comb[j],roads);
               
                if ( found ) { 
                     
                     indice = no_roads_houses[i].indexOf(comb[j][1]);
                     if (indice > 0) {no_roads_houses[i].splice(indice,1)}
                   
                     }
                j=j+1;                
             };
            
        };
        
        console.log(no_roads_houses);

       
        no_roads_houses=enlever_doublon(no_roads_houses,0,tmp);

        console.log(no_roads_houses);

        for (let i=0; i < no_roads.length; i++) {
                                         
            found=findArray(no_roads[i] ,no_roads_houses);
            if ( !found ) { no_roads_houses.push(no_roads[i])} ;
        };
        
        console.log(no_roads_houses);

        return no_roads_houses;
  }
  
  function traiter(arr,i,index_t) {
    console.log('index',index_t);
    
    
    next=index_t.length - 1;
    if ( next >= 1 ) { remplir (arr,i,0,next,index_t); }
    else { remplir (arr,i,0,0,index_t);}
    console.log('no_r_h',no_r_h);
    no_roads_houses.push(no_r_h);
    while ( next > 0 ) {
      traiter(arr,next,genIndex(arr,next+1))
      //console.log('next',next);
      if ( index_t[next]+1 == arr.length) { k = index_t[next] }
      else {k=index_t[next]+1}
     // if ( next=index_t.length - 1 ) { fin_de_course= index_t[next]+1}
     // else {fin_de_course= index_t[next+1]}
      while ( k < index_t[next+1] ) {
        t=k;
        remplir (arr,i,0,next-1,index_t);
        no_r_h.splice(no_r_h.length-1,1);
        no_r_h.push(arr[k][0]);
        no_r_h.push(arr[k][1]);
        //console.log('k',k);
        rep2=arr[k][1];
        while ( t < arr.length ) {
          //console.log('t ici',t);
          //console.log('index',index_t[next]);
          if ( rep2 == arr[t][0] ) {
             //console.log('t',t);
             no_r_h.splice(no_r_h.length-1,1);
             no_r_h.push(arr[t][0]);
             no_r_h.push(arr[t][1]);
             rep2 = arr[t][1];
          }
          
          t=t+1;
         }
         console.log('no_r_h',no_r_h);
         no_roads_houses.push(no_r_h);
         k=k+1
        }  
       next=next-1;

    } 
    
 
       //no_roads_houses.push(no_r_h);  
  } 
    
  function remplir (arr,i,deb,fin,index_r) {
    no_r_h=[];
    no_r_h.push(arr[i][0]);
    no_r_h.push(arr[i][1]);
    
    for (let s=deb; s <= fin ; s++) {
      no_r_h.splice(no_r_h.length-1,1);
      no_r_h.push(arr[index_r[s]][0]);
      no_r_h.push(arr[index_r[s]][1]);
    }
}

  function enlever_doublon (arr,k,ans) {
    if  (k==0) {ans.push(arr[0])}
    while ( k < arr.length ) { 
        exist=false;
        for ( x in ans ) { if (JSON.stringify(ans[x])==JSON.stringify(arr[k])) { exist=true; break } };
        if (!exist) { ans.push(arr[k])};
        return enlever_doublon(arr,k+1,ans);
    };

    return ans;
  } 
  
   function genIndex(arr,k) {
        j=k;
        index=[];
        index1=[];
        index.push(j);
        rep=arr[j][1];
        index1.push(arr[j][0]);
        //index1.push(rep);
        while( j < arr.length ) {
            while (arr[j][0] != rep & j < arr.length-1) {
                j=j+1
            } 
            if ( j < arr.length ) {  
                if (arr[j][0] == rep) {
                    rep=arr[j][1];
                    
                    index.push(j);
                    index1.push(arr[j][0]);
                 }
                 //else { if ( j == arr.length - 1 ) { index.push(j);}}
                }  
              j=j+1;
         }
        
       return [index,index1];  
   }

   function combine(arr) {
     comb=[];
     for (let i=0; i < arr.length ; i++) {
        for (let j=i+1; j < arr.length; j++) {
            comb.push([arr[i],arr[j]]);
            
        };
        
     }
     
     return comb;
   }

   function findArray(tab1,tab2) {
       
          for (let i=0; i < tab2.length; i++) {
            if (tab1.length==2 & tab2[i].length==2) { 
              if ((tab1[0]==tab2[i][0] || tab1[0]==tab2[i][1]) &
                 (tab1[1]==tab2[i][1] || tab1[1]==tab2[i][0])) 
               {
                 return true;
               }
            }
          }

    return false;
  }

     
   return [ans,numb_poss];
}

function trouver(arr,p,k,ans) {
   
    if ( k >= arr.length) { return ans;};
    if ( arr[k] != p) { ans.push(arr[k]) };
    if ( k < arr.length ) { return trouver(arr,p,k+1,ans)}
    
  
}





function enlever_doublon (arr,k,ans) {
    if  (k==0) {ans.push(arr[0])}
    while ( k < arr.length ) {
        exist=false;
        for (x in ans) { if (ans[x]==arr[k]) { exist=true; break}};
        
        if (!exist) { ans.push(arr[k])};
        
        return enlever_doublon(arr,k+1,ans);
    }
return ans;

}

function enlever2 (arr) {
    let i=0;
    while (i < arr.length-1 ) {
        if (arr[i] == arr[i+1] ) { arr.splice(i,1)}
        else {i++}
    }
   

    return arr;
}
   


//const  map1 = new Map();

//console.log(map1.get(1));
//for (x in map1) {console.log(`${x}: ${map1[x]}`)};


//arr=[[0,1],[5,2],[9,3],[12,4],[14,5],[15,6]];
arr=[1,2,3,4,5,6];
t=2;
//for (x in arr) {if (arr[x]==t) {console.log(x)};};

//if (arr[x]=t) {console.log(x)};
arr1=[1,2,3];
arr2=[1,2,3];
//console.log(JSON.stringify(arr1)==JSON.stringify(arr2));
ans=[];
//console.log(trouver(arr,5,0,ans));
//console.log(remplir(arr,0,ans));
//console.log(enlever_doublon(arr,0,ans));
//console.log(enlever2(arr))
//roads=[[3,5],[2,5],[2,3],[4,5],[1,3],[2,4]];
//money=[75,75,50,75,100];

//roads=[[3,5],[2,4],[5,6],[4,6],[1,4]];
//roads=[[3,5],[2,4],[1,4]];
//money=[100,0,100,100,100,0,100];

//roads=[[1,2],[3,2]];
//money=[6,8,2];

//roads=[[1,2]];
//money=[6,8];

//roads=[[1,2],[3,4],[2,3],[1,4],[1,3],[2,4]]
//money=[50,100,50,50];

//roads=[[4,5],[3,7],[3,8],[1,8],[5,8],[6,8],[4,8],[2,5],[2,8],[2,4],[4,7],[5,6],[1,5],[2,7],[1,2],[3,4],[1,4],[3,6],[1,3],[7,8]];
//money=[25, 0, 25, 100, 75, 100, 0, 50]

//roads=[[3,4],[1,9],[5,9],[1,2],[1,4],[2,3],[4,6],[2,5],[2,7],[1,7],[6,8],[1,6],[3,7],[6,9],[4,8],[2,9],[8,9],[6,7],[2,4],[4,9],[5,8],[4,5],[4,7]];
//money=[50, 100, 50, 0, 50, 0, 100, 0, 0];

//roads=[[1,6],[7,9],[1,10],[2,10],[3,10],[6,8],[3,5],[4,7],[8,9],[4,6],[7,8],[4,8],[6,9],[2,9],[2,3],[6,10],[2,4],[2,5]];
//money=[100, 100, 0, 0, 0, 0, 0, 0, 100, 100];

//roads=[[2,3],[1,2],[3,4],[2,4],[1,3],[1,4]];
//money=[100, 0, 100, 100];

roads=[[11,14],[1,3],[3,10],[7,10],[9,13],[5,7],[3,4],[8,11],[10,14],[1,7],[9,10],[9,11],[1,6],[6,11],[5,10],[2,6],[1,12],[4,13],[8,12],[1,2]];
money=[100, 100, 100, 0, 100, 0, 100, 100, 100, 100, 0, 100, 100, 100];
year=1984
console.log('12.09.'+year.toString());
bill=[3,10,2,9];
bill.splice(1,1);
console.log(bill);
test=[1,2,2,1,3,1,4,5,4,6]
test.sort();
word='fuck'
console.log('word',word[0]);
console.log('code ascii',word[0].charCodeAt(0));

function bonAppetit(bill, k, b) {
  // Write your code here
  bill.splice(k,1);
  let sum=0;
  let ans='';
  for (let i=0; i < bill.length; i++) {
      sum=sum+bill[i];
  };
  let  b_actual=sum/2;
  console.log(b-b_actual);
  if ( b - b_actual > 0 ) { ans=(b-b_actual).toString(); }
  else { ans="Bon Appetit";} 
  
  return ans;
}

function sockMerchant(n, ar) {
  // Write your code here
  ar.sort();
  console.log(ar);
  let nb_pair=0;
  i=0;
  while ( i  < n-2 ) {
      let counter=0;
      j=i;
      while (j < n-1 & ar[j] == ar[j+1]) {
         
           counter +=1;
        
           j=j+2;
        } 
      console.log('j',j);   
      //console.log('floor',Math.floor(counter / 2))
      nb_pair = nb_pair+counter 
  i=j+1
  }
  return nb_pair;
}

function designerPdfViewer(h, word) {
  // Write your code here
  
  let max_height=0;
  
  for (let i=0; i < word.length; i++) {
      if (h[word[i].charCodeAt(0)-97] > max_height) {
          max_height=h[word[i].charCodeAt(0)-97];
          }
  }
  
  return word.length*max_height;

}

function fuck() {
  
  const output = execSync('ls', {encoding: 'utf-8'});
  console.log('output was:\n', output);

}

function utopianTree(n) {
  // Write your code here
   
  let l=1;
  for (let j=1; j <= n;j++) {
      if ( j % 2 == 0) {l=l+1}
      else {l=2*l}
  }
  
      
 return l;
}


function countingValleys(steps, path) {
  // Write your code here
  let counter=0;
  let u_counter=0;
  let d_counter=0;
  let i=0;
  let sum=0;
  let downhill=false;
  while ( i < steps ) {
      if ( path[i]=='U') {sum +=1;u_counter +=1;}
      if ( path[i]=='D') {sum -=1;d_counter +=1;}
      if ( !downhill & d_counter > u_counter ) { downhill=true;}
      if ( sum==0 & downhill ) {
           counter +=1;
           u_counter=0;
           d_counter=0;
           downhill=false;
            }
  i=i+1;    
  }
return counter;
}

function formingMagicSquare(s) {
  // Write your code here
  pattern=[[[8, 1, 6], [3, 5, 7], [4, 9, 2]],
  [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
  [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
  [[2, 9, 4], [7, 5, 3], [6, 1, 8]], 
  [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
  [[4, 3, 8], [9, 5, 1], [2, 7, 6]], 
  [[6, 7, 2], [1, 5, 9], [8, 3, 4]], 
  [[2, 7, 6], [9, 5, 1], [4, 3, 8]]];
  let ans=Math.pow(2,31);
  
  for (let i=0; i < 8; i++) {
    let cost=0;
    for (let j=0; j < 3; j++) {
      if ( s[j][0] != pattern[i][j][0]) { cost = cost + Math.abs(s[j][0] - pattern[i][j][0]) };
      if ( s[j][1] != pattern[i][j][1]) { cost = cost + Math.abs(s[j][1] - pattern[i][j][1]) };
      if ( s[j][2] != pattern[i][j][2]) { cost = cost + Math.abs(s[j][2] - pattern[i][j][2]) };
      
    }
    
    if ( cost < ans ) { ans = cost }
  }

return ans;
}

function pickingNumbers(a) {
  // Write your code here
  let i=0;
  
  let max=0;
  let temp=[];
  while ( i < a.length-1 ) {
    let j=i+1;
    
    while ( j < a.length ) {
      temp.push(a[i]);
       k=j;
       while ( k < a.length ) {
          ok=true;
          for ( t=0; t < temp.length; t++ ) {
            if ( Math.abs(temp[t]-a[k]) > 1 ) { ok=false; break;  } 
            
          }
          if ( ok ) {temp.push(a[k]); }
          
         k=k+1;
       }
       console.log(temp)
       if ( temp.length > max ) { max = temp.length }
       j=j+1;
       temp=[];
    }   
    i=i+1
  }
 return max;
}

function climbingLeaderboard(ranked, player) {
  // Write your code here
  let dict=new Map();
  let next=0;
  let prev=0;
  let ans=[];
  i=0;
  
  rank=1;
  while ( i < ranked.length ) {
  
     if ( ranked[i] != ranked[i+1] ) {
     dict.set(rank,ranked[i]);
     rank +=1;
     }
   i=i+1; 
  }
  
  end=dict.size;
    
  j=end;
  for (t=0; t < player.length; t++ ) {
   
    while ( j >= 1 ) {
     
      if ( j == end & player[t] < dict.get(j) ) {
           dict.set(j+1,player[t]);
           ans.push(j+1);
           break;
          }
      else {
        if ( j == 1 & player[t] > dict.get(j) ) { 
          next=dict.get(1);
          dict.set(1,player[t]);
          ans.push(j);
          break;   
          //console.log('rank :',j);
        }
        else {
          if ( dict.get(j) > player[t] ) {
            ans.push(j+1);
            break;
          }
          else {
             if (dict.get(j) == player[t]) {
                 ans.push(j);
                 break;
               }
          }
        }
      
     };
     j=j-1;

    }

  }
  
 return ans;
}

function gradingStudents(grades) {
  // Write your code here
  ans=[];
  for (let i=0; i < grades.length; i++) {
    if ( grades[i] % 5 < 3 ) { ans.push() }
  }

}

function circularArrayRotation(a, k, queries) {
    
  for(let i=0;i<k;i++){
      a.unshift(a.pop());
  }
  return queries.map(q=>a[q]);
}

function saveThePrisoner(n, m, s) {
  // Write your code here
    
  return (((s-1)+(m-1)) % n) +1;

}

steps=8;
//path=['U','D','U','U','U','D','U','D','D','D'];
//path=['D','U','D','D','D','U','U','D','U','U'];
path=['U','D','D','D','U','D','U','U']

console.log('valleys',countingValleys(steps,path));

ar=[10, 10, 10, 10, 10, 10, 10, 10, 10, 10,10];
//ar=[1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
console.log('sock  ',sockMerchant(11,ar));
console.log(bonAppetit(bill,7,7));
//console.log(demandingMoney(money,roads));

//s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]; 
//s = [[2,9,8],[4,2,7],[5,6,7]];
s = [[4,9,2],[3,5,7],[8,1,5]];
console.log('cost : ',formingMagicSquare(s));

//arr=[4, 6, 5, 3, 3, 1];
arr=[1, 2, 2, 3, 1, 2];
console.log('pick',pickingNumbers(arr));

//let dict={1:100,2:80,3:50,4:20};
let dict=new Map([[1,100],[2,80],[3,50],[4,20]])
//let dict=new Map();
//dict.set(4,10);
//dict.set(5,5);
//for (i in dict) { console.log(dict.get(i)) };
if ( 200 > dict.get(1)) { console.log('here we are !!!') };
const iterator1 = dict.keys();
const iterator2 = dict.values();
console.log('keys',iterator1);
console.log('values',iterator2);
console.log(dict.get(4));
//ranked=[100, 90, 90, 80, 75, 60];
//player=[50, 65, 77, 90, 102];

ranked=[100, 100, 50, 40, 40, 20, 10];
player=[5, 25, 50, 120];
console.log(climbingLeaderboard(ranked,player));

n=1;
console.log('utop',utopianTree(n));
num=21
console.log(parseFloat(num.toString().split('').reverse().join('')));

a=[1,2,3];k=2;queries=[1,0,2];
console.log(circularArrayRotation(a,k,queries));

fuck();