type NodeType = string | number;

interface IGraph {
  adjacencyList: { [key in NodeType]: NodeType[] };
  addVertex(vertex: NodeType): void;
  removeVertex(vertex: NodeType): void;
  addEdge(vertex1: NodeType, vertex2: NodeType): void;
  removeEdge(vertex1: NodeType, vertex2: NodeType): void;
  depthFirstSearch(start: NodeType): NodeType[];
}

export class Graph implements IGraph {
  adjacencyList: { [key in NodeType]: NodeType[] } = {};

  addVertex(vertex: NodeType): void {
    this.adjacencyList[vertex] = [];
  }

  removeVertex(vertex: NodeType) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()!;
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  addEdge(vertex1: NodeType, vertex2: NodeType): void {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1: NodeType, vertex2: NodeType) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1);
  }

  depthFirstSearch(start: NodeType) {
    const result: NodeType[] = [];
    const visited: { [key in NodeType]: boolean } = {};

    const bfs = (vertex: NodeType): NodeType | null => {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return bfs(neighbor);
        }
        return null;
      });
      return null;
    };
    bfs(start);

    return result;
  }
}
