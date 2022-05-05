function largestComponent(edges) {
    const graph=buildGraph(edges);
    console.log(graph);
    let maxsize=0;
    //let size=0;
    let visited=new Set();
    for (let node in graph) {
           //let size=0;  
           size = explore(graph,node,visited);
           // console.log(size);
           if ( size > maxsize )  maxsize=size; 
        }
    
    
    return maxsize;

}

function explore(graph,current,visited) {
    if (visited.has(String(current))) return 0;
     
    visited.add(String(current));
    let size=1;
    for ( let neighbor of graph[current] ) {
        //size +=1;
        //console.log(size);
        size += explore(graph,neighbor,visited);
        
    }

    return size;
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



//edges=[[1,2],[3,2],[4,6],[5,6],[6,7],[8,6]];
edges=[['w','x'],['w','v'],['x','y'],['y','z'],['v','z']];
console.log(largestComponent(edges));