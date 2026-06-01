class Graph {
  nodes = new Set();
  edgeList = new Map();

  get nodes() {
    return Array.from(this.nodes);
  }

  get edgeList() {
    let list = {};

    this.edgeList.forEach((val, key) => {
      list[key] = Array.from(val);
    });

    return list;
  }

  addNode(node = null) {
    if (node !== null || node !== undefined) {
      this.nodes.add(node);
      this.edgeList.set(node, new Set());
    }
    this.nodes = new Set([...this.nodes].sort());
    this.edgeList = new Map([...this.edgeList].sort());
  }

  // nodes can point to themselves
  addEdge(node1 = null, node2 = null, directed = true) {
    if (
      node1 !== null ||
      (node1 !== undefined && node2 !== null) ||
      node2 !== undefined
    ) {
      if (!this.edgeList.has(node1)) {
        this.addNode(node1);
      }
      if (!this.edgeList.has(node2)) {
        this.addNode(node2);
      }

      this.edgeList.get(node1).add(node2);
      
      if (directed && node1 !== node2) {
          this.edgeList.get(node2).add(node1);
        }
    }

    this.edgeList.set(node1, new Set([...this.edgeList.get(node1)].sort((a, b) => a.localeCompare(b))));
    this.edgeList.set(node2, new Set([...this.edgeList.get(node2)].sort((a, b) => a.localeCompare(b))));
  }

  toString() {
    let str = "";

    this.edgeList.forEach((val, key) => {
      str += `${key} => ${Array.from(val).join(", ")}\n`;
    });

    return str;
  }

  generateAdjacencyMatrix() {
    // populate new array with nodes
    let nodes = [...this.nodes];

    // nxn so an array of length n with a function creating arrays also of length n to populate the containing array with
    let matrix = Array.from({ length: nodes.length }, () =>
      Array(nodes.length).fill(0),
    );

    // node label -> matrix index
    let indices = new Map();

    // for each node map the key:index
    nodes.forEach((node, index) => {
      indices.set(node, index);
    });

    // destructure keys/from and values/connections from edgelist in the classes instance
    for (let [from, connections] of this.edgeList) {
        // get the index value of the from/key
      let fromIndex = indices.get(from);

      // iterate over values in value/connections
      for (let to of connections) {
        // get the indices of the value
        let toIndex = indices.get(to);

        // update the value in the matrix at those coords
        matrix[fromIndex][toIndex] = 1;
      }
    }

    return matrix;
  }

  adjacencyMatrixString() {
    let str = "";
    let matrix = this.generateAdjacencyMatrix();

    for (let arr of matrix) {
      str += `${arr.join(",")}\n`;
    }
    return str;
  }
}

let g = new Graph();
const randInt = (max, min = 0) =>
  Math.floor(Math.random() * Math.floor(max)) + Math.floor(min);
const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(i + 65),
);

// the more times its ran the more edges are made
function randAlphabet() {
  alphabet.forEach((letter) =>
    g.addEdge(letter, alphabet[randInt(alphabet.length)]),
  );
  alphabet.forEach((letter) =>
    g.addEdge(letter, alphabet[randInt(alphabet.length)]),
  );
  alphabet.forEach((letter) =>
    g.addEdge(letter, alphabet[randInt(alphabet.length)]),
  );
}

function randSpecifiedVarsInObject() {
  let a = { val: "a" };
  let b = { val: "b" };
  let c = { val: "c" };
  let d = { val: "d" };
  let e = { val: "e" };
  let f = { val: "f" };
  let list = [a, b, c, d, e, f];

  list.forEach((v) => g.addEdge(v.val, list[randInt(list.length)].val));
  list.forEach((v) => g.addEdge(v.val, list[randInt(list.length)].val));
}

function doIt({ go = 0 }) {
  let func =
    go === 0
      ? randAlphabet()
      : go === 1
        ? randSpecifiedVarsInObject()
        : console.log(`incorrect Input in doIt: doIt(go:${go})`);

  func;
}

doIt({ go: 0 });
//console.log(g.nodes, g.edgeList)
console.log(g.toString());
console.log(g.adjacencyMatrixString());
