import { BinarySearchTree } from './BinarySearchTree';

describe('Basic functionality', () => {
  it('should create and add', () => {
    const binarySearchTree = new BinarySearchTree<number>();
    binarySearchTree.insert(8);
    binarySearchTree.insert(3);
    binarySearchTree.insert(10);
    binarySearchTree.insert(1);
    binarySearchTree.insert(6);
    binarySearchTree.insert(14);

    const root = binarySearchTree.root;

    expect(root?.value).toBe(8);
    expect(root?.left?.value).toBe(3);
    expect(root?.right?.value).toBe(10);
    expect(root?.left?.left?.value).toBe(1);
    expect(root?.left?.left?.value).toBe(6);
    expect(root?.right?.right?.value).toBe(14);
  });

  it('should find and return', () => {
    const binarySearchTree = new BinarySearchTree<number>();
    binarySearchTree.insert(8);
    binarySearchTree.insert(3);
    binarySearchTree.insert(10);

    expect(binarySearchTree.find(10)?.value).toBe(10);
    expect(binarySearchTree.find(3)?.value).toBe(3);
  });
});

describe('Sad tests', () => {
  it('should return null when finding within an empty tree', () => {
    const binarySearchTree = new BinarySearchTree();

    expect(binarySearchTree.find(10)).toBe(null);
  });

  it("should return null when the item doesn't exists", () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(8);

    expect(binarySearchTree.find(10)).toBe(null);
  });
});
