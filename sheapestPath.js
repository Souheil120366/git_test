function cheapestPath(graph,nodeA,nodeB) {
    
    const visited = new Set([nodeA]);
    //console.log(graph);
    //for (let node in graph) console.log(node); 
    const queue = [[nodeA,0]];
    const ans=[];
    const predecesseur=[];
    predecesseur[nodeA]=null;
    //branche[nodeA]=0;
    while ( queue.length > 0 ) {
        const [node,dist] = queue.shift();
        //console.log(visited);
        if (node==nodeB)  { 
            //Distance: dist,
            //Path: buildPath(predecesseur,nodeA,nodeB)
            ans.push(buildPath(predecesseur,nodeA,nodeB));
        } ;
        //console.log(node);
        for ( neighbor of graph[node]) {
           if (!visited.has(neighbor[0])) {
              visited.add(neighbor[0]);  
             
              queue.push([neighbor[0],dist+1]);
             // branche[neighbor]=branche[node]+1;
              predecesseur[neighbor[0]]=node;
           }  
        }
    }
  return ans;
}

function calcul_cost(graph,nodeA,nodeB) {  
   cost=Number.MAX_VALUE;
   if ( nodeA==nodeB ) return 0;
   for ( neighbor of graph[nodeA]) {
       cost=Math.min(cost,neighbor[1]+calcul_cost(graph,neighbor[0],nodeB)); 
    }

return cost;
}

function buildGraph(edges) {
    const graph = {};
    for ( let edge of edges ) {
        const [a,b,c] = edge;
        if (!(a in graph)) graph[a]=[];
        if (!(b in graph)) graph[b]=[];
        graph[a].push([b,c]);
      //  graph[b].push([a,c]);

    }
    return graph;
}

function buildPath(predecesseur,nodeA,nodeB) {
    const pile=[];
    pile.push(nodeB);
    u=predecesseur[nodeB];
    while ( u != nodeA ) {
        pile.push(u);
        u=predecesseur[u];
    }
    pile.push(nodeA);

    return pile.reverse();
    //.join('-');

}


edges=[['w','x',1],['w','v',2],['w','u',3],['u','t',4],['x','y',5],['y','z',6],['v','y',7],['v','z',8],['v','t',9],['t','z',10]];

graph=buildGraph(edges);

console.log(graph);

//console.log('Minimum cost path : ',cheapestPath(graph,'w','z'));
console.log(cheapestPath(graph,'w','z'));
console.log('minimum cost : ',calcul_cost(graph,'w','z'));