function depthFirstprint(graph,source,visited) {
    //graph=buildGraph(edges);
    //const visited = new Set();
    console.log(source);
    for ( neighbor of graph[source[0]] ) {
        //console.log('visited',visited);
        //if (!visited.has(neighbor[0])) {
        //    visited.add(neighbor[0]); 
            depthFirstprint(graph,neighbor[0],visited);
            
       // }
    }

}

function breadthFirstprint(graph,source) {
    const queue= [ source ];
    while ( queue.length > 0 ) {
        current = queue.shift();
        console.log(current);
        for ( neighbor of graph[current[0]]) {
            queue.push(neighbor[0]);
        }
    }
   
}

function buildGraph(edges) {
    const graph = {};
    for ( let edge of edges ) {
        const [a,b,c] = edge;
        if (!(a in graph)) graph[a]=[];
        if (!(b in graph)) graph[b]=[];
        graph[a].push([b,c]);
        graph[b].push([a,c]);

    }
    return graph;
}



edges=[['w','x',3],['w','v',4],['x','y',5],['y','z',6],['v','z',7]];

graph=buildGraph(edges);
//visited=new Set();
//depthFirstprint(graph,'w',visited);
breadthFirstprint(graph,'w');