function shortestPath(edges,nodeA,nodeB) {
    const graph=buildGraph(edges);
    const visited = new Set([nodeA]);
    console.log(graph);
    //for (let node in graph) console.log(node); 
    const queue = [[nodeA,0]];
    //const branche=[];
    const predecesseur=[];
    predecesseur[nodeA]=null;
    //branche[nodeA]=0;
    while ( queue.length > 0 ) {
        const [node,dist] = queue.shift();
        //console.log(visited);
        if (node==nodeB) return { 
            Distance: dist,
            Path: buildPath(predecesseur,nodeA,nodeB)
        } ;
        for ( neighbor of graph[node]) {
           if (!visited.has(neighbor)) {
              visited.add(neighbor);  
             
              queue.push([neighbor,dist+1]);
             // branche[neighbor]=branche[node]+1;
              predecesseur[neighbor]=node;
           }  
        }
    }

}

   

function buildGraph(edges) {
    const graph = {};
    for ( let edge of edges ) {
        const [a,b] = edge;
        if (!(a in graph)) graph[a]=[];
        if (!(b in graph)) graph[b]=[];
        graph[a].push(b);
        graph[b].push(a);

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

    return pile.reverse().join('-');

}

arr=[];
arr['A']=0;
console.log(arr);


edges=[['w','x'],['w','v'],['x','y'],['y','z'],['v','z']];
console.log(shortestPath(edges,'w','z'));
