//1. How many searches?
//Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm,
//identify the sequence of numbers that each recursive call will search to try and find 8.
    //First Search - start 0, end 10 --> guess index 5 = 12 --> 8 is less than 12 --> recursively check lower half
    //Second Search - start 0, end 4 --> guess index 2 = 6 --> 8 is greater than 6 --> recursively check upper half
    //Third Search - start 3, end 4 --> guess index 3 = 8 --> 8 equals 8 --> return index of 3
    //Sequence = 12, 6, 8
//Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm,
//identify the sequence of numbers that each recursive call will search to try and find 16. 
    //First Search - start 0, end 10 --> guess index 5 = 12 --> 16 is greater than 12 --> recursively check upper half
    //Second Search - start 6, end 10 --> guess index 8 = 17 --> 16 is less than 17 --> recursively check lower half
    //Third Search - start 6, end 7 --> guess index 6 = 14 --> 16 is greater than 14 --> recursively check upper half
    //Fourth Search - start 7, end 7 --> guess index 7 = 15 --> 16 is greater than 15 --> recursively check upper half
    //Fifth Search - start 8, end 7 --> start is greater than end --> return -1
    //Sequence = 12, 17, 14, 15

//2. Adding a React UI
//See search-react-app

//3. Find a Book
//First digit of DDC would be like a array indexOf search.  That gets me in the right section of the library.
//Next digits get me into the right section of the section.  Then I'd need to get the author of the book title I'm
//looking for (another array indexOf search probably).  That gets me laser focused onto the right shelf.  Then I can
//essentially do a binary search on the shelf finding the author's last name at the end of the DDC numbers.

//4. Searching in a BST
//...BinarySearchTree class...
dfsInOrder(values=[]) {
    if (this.left) {
        values = this.left.dfsInOrder(values);
    };
    values.push(this.key);
    if (this.right) {
        values = this.right.dfsInOrder(values);
    };
    return values;
};
dfsPreOrder(values=[]) {
    values.push(this.key);
    if (this.left) {
        values = this.left.dfsPreOrder(values);
    };
    if (this.right) {
        values = this.right.dfsPreOrder(values);
    };
    return values;
};
dfsPostOrder(values=[]) {   
    if (this.left) {
        values = this.left.dfsPostOrder(values);
    };
    if (this.right) {
        values = this.right.dfsPostOrder(values);
    };
    values.push(this.key);
    return values;
};
//...BinarySearchTree class...

    //1. in-order: 14 15 19 25 27 35 79 89 90 91
    //pre-order: 35 25 15 14 19 27 89 79 91 90
    //post-order: 14 19 15 27 25 79 90 91 89 35
    const BSTordering = new BinarySearchTree();
    BSTordering.insert(35);
    BSTordering.insert(25);
    BSTordering.insert(15);
    BSTordering.insert(14);
    BSTordering.insert(19);
    BSTordering.insert(27);
    BSTordering.insert(89);
    BSTordering.insert(79);
    BSTordering.insert(91);
    BSTordering.insert(90);
    console.log(BSTordering.dfsInOrder());
    console.log(BSTordering.dfsPreOrder());
    console.log(BSTordering.dfsPostOrder());
    //2. post-order: 5 7 6 9 11 10 8
    //pre-order: 8 6 5 7 10 9 11
    const BSTordering2 = new BinarySearchTree();
    BSTordering2.insert(8);
    BSTordering2.insert(6);
    BSTordering2.insert(5);
    BSTordering2.insert(7);
    BSTordering2.insert(10);
    BSTordering2.insert(9);
    BSTordering2.insert(11);
    console.log(BSTordering2.dfsPostOrder());
    console.log(BSTordering2.dfsPreOrder());

//5. Implement different tree traversals
//See above.
const BSTDifferentTreeTraversals = new BinarySearchTree();
BSTDifferentTreeTraversals.insert(25);
BSTDifferentTreeTraversals.insert(15);
BSTDifferentTreeTraversals.insert(50);
BSTDifferentTreeTraversals.insert(10);
BSTDifferentTreeTraversals.insert(24);
BSTDifferentTreeTraversals.insert(35);
BSTDifferentTreeTraversals.insert(70);
BSTDifferentTreeTraversals.insert(4);
BSTDifferentTreeTraversals.insert(12);
BSTDifferentTreeTraversals.insert(18);
BSTDifferentTreeTraversals.insert(31);
BSTDifferentTreeTraversals.insert(44);
BSTDifferentTreeTraversals.insert(66);
BSTDifferentTreeTraversals.insert(90);
BSTDifferentTreeTraversals.insert(22);
console.log(BSTDifferentTreeTraversals.dfsInOrder());
console.log(BSTDifferentTreeTraversals.dfsPreOrder());
console.log(BSTDifferentTreeTraversals.dfsPostOrder());

//6. Find the next commanding officer
//...BinarySearchTree class...
bfs(results=[]) {
    const queue = new Queue();
    const node = this;
    queue.enqueue(node);
    while (queue.first) {
        const node = queue.dequeue();
        results.push(node.value);
        if (node.left) {
            queue.enqueue(node.left);
        };
        if (node.right) {
            queue.enqueue(node.right);
        };
    };
    return results;
};
//...BinarySearchTree class...

const StarTrekRanks = new BinarySearchTree();
StarTrekRanks.insert(10, 'Captain Picard');
StarTrekRanks.insert(8, 'Commander Riker');
StarTrekRanks.insert(9, 'Lt. Cmdr. LaForge');
StarTrekRanks.insert(7, 'Lt. Cmdr. Worf');
StarTrekRanks.insert(6, 'Lieutenant security-officer');
StarTrekRanks.insert(11, 'Commander Data');
StarTrekRanks.insert(13, 'Lt. Cmdr. Crusher');
StarTrekRanks.insert(12, 'Lieutentant Selar');
console.log(StarTrekRanks.bfs());

//7. Max profit
const maxProfit = function(array) {
    let max = array[1] - array[0];
    let maxBuy = 0;
    let maxSell = 1;
    for (let i = 1; i < array.length; i++) {
      if (array[i] - array[i-1] > max) {
        max = array[i] - array[i-1];
        maxBuy = i - 1;
        maxSell = i;
      };
    };
    console.log(`Buy on day ${maxBuy}. Sell on day ${maxSell}.`)
    console.log(`Max profit will be $${max} per share.`)
    return max;
  };
  console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));