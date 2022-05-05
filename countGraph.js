function countGraph(edges) {
    const graph=buildGraph(edges);
    console.log(graph);
    let count=0;
    let visited=new Set();
    for (let node in graph) {
             
           if ( explore(graph,node,visited) == true ) count +=1;
       
    }
    
    return count;

}

function explore(graph,current,visited) {
    if (visited.has(String(current))) return false;
     
    visited.add(String(current));
    for ( let neighbor of graph[current] ) {
        explore(graph,neighbor,visited);
    }

    return true;
}

function buildGraph(edges) {
    const graph = {};
    for ( let edge of edges ) {
        const [a,b] = edge;
        if (a != null & !(a in graph)) graph[a]=[];
        if (b != null & !(b in graph)) graph[b]=[];
        if (a != null & b != null) { graph[a].push(b); graph[b].push(a);}
       

    }
    return graph;
}



edges=[[1,2],[3,2],[4,6],[5,6],[6,7],[8,6]];
console.log(countGraph(edges));