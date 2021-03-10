# Connected Graph
Generates a connected graph with a random number of nodes (between 8 and 16) and a random number of edges, then repeatedly chooses two nodes and finds a minimum path between them.

To generate the graph, I first choose the number of nodes n and initialize an adjacency matrix (initially, there are no edges). Then I generate a list of all possible edges and I shuffle it. I iterate over this list and add each edge to the graph until the graph is connected.

To shuffle the list, I use the Fisher-Yates algorithm, which gives an unbiased permutation of the list of integers in time linear with respect to the length of the list. Since the list is a list of all pairs of nodes in the graph, the length of the list is O(n^2), so the running time of shuffling the list is O(n^2).

To determine if the graph is connected, I use a union-find (or "disjoint set") data structure, with elements representing the nodes. Every time I add an edge, I union the nodes. Then, I iterate over all nodes and find their parent, to determine if all nodes have the same parent. If so, then the graph is finished.

Since I perform 1 union and at most n finds in every iteration, the worst-case running time of each iteration is O(n\alpha(n)). A disconnected graph can have at most n-1 edges, so there are at most n-1 iterations (if we ignore iterations where the randomly-chosen edge was a self-loop or already existed). Therefore, the worst-case running time of the graph-generating algorithm is O(n^2\alpha(n)).

To find the minimum path between two nodes, I use a breadth-first search, which has a worst-case running time of O(n^2).

If I expand on this visualization, I plan to find more a interesting way of displaying the graph (rather than just a circle), in such a way that can handle a graph with more nodes while still being coherant.