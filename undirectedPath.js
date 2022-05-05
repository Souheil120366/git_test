function undirectedPath(edges,nodeA,nodeB) {
    const graph=buildGraph(edges);
    console.log(graph);
    //for (let node in graph) console.log(node); 
    return hasPath(graph,nodeA,nodeB,new Set());

}

function hasPath(graph,src,dest,visited) {
    if (src==dest) {console.log('hello'); return 0; }
   
    if (visited.has(src)) return false;
    visited.add(src);
    let size = 1;
    for ( let neighbor of graph[src] ) {
        size += hasPath(graph,neighbor,dest,visited);
    }
    return size;
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



edges=[['w','x'],['w','v'],['x','y'],['y','z'],['v','z']];
console.log(undirectedPath(edges,'w','z'));