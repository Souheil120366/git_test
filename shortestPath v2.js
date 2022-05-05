function shortestPath(edges,nodeA,nodeB) {
    const graph=buildGraph(edges);
    const visited = new Set([nodeA]);
    console.log(graph);
    //for (let node in graph) console.log(node); 
    const queue = [[nodeA,0]];
    
    while ( queue.length > 0 ) {
        const [node,dist] = queue.shift();
        //console.log(visited);
        if (node==nodeB) return dist;
        for ( neighbor of graph[node]) {
           if (!visited.has(neighbor)) {
              visited.add(neighbor);  
             
              queue.push([neighbor,dist+1]);
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

arr=[];
arr['A']=0;
console.log(arr);


edges=[['w','x'],['w','v'],['x','y'],['y','z'],['v','z']];
console.log(shortestPath(edges,'w','z'));
