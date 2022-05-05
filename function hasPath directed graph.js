function hasPath1(graph,source,dest) {
    //console.log(source);
    if (source==dest) return true;
    for ( neighbour of graph[source] ) {
        if (hasPath1(graph,neighbour,dest) == true ) return true;
    }
    return false;
}

function hasPath2(graph,source,dest) {
    if (source==dest) return true;
    const queue= [ source ];
    while ( queue.length > 0 ) {
        current = queue.shift();
        
        if (current==dest) return true;
        for ( neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }

    return false;
   
}

const graph = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['g','k'],
    j: ['i'],
    k: []
}



console.log(hasPath1(graph,'f','k'));
//console.log(hasPath2(graph,'f','k'));