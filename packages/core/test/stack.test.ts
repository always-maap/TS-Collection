import { Stack } from '../src';

describe('Basic functionality', () => {
  it('add 1 node to stack return 1 which is size of stack', () => {
    const stack = new Stack<number>();
    expect(stack.push(5)).toBe(1);
  });

  it('adding 3 nodes to stack return 3 which is the size of the stack', () => {
    const stack = new Stack<number>();
    stack.push(11);
    stack.push(48);
    expect(stack.push(23)).toBe(3);
  });

  it('adding 2 nodes and removing the last node should result, first and last be the same', () => {
    const stack = new Stack<string>();
    stack.push('stack');
    stack.push('overflow');
    stack.pop();
    expect(stack.first).toBe(stack.last);
  });

  it('popping the last item in the stack should result in the head and the tail becoming null', () => {
    const stack = new Stack<number>();
    stack.push(5);
    stack.pop();
    expect(stack.last).toBe(null);
    expect(stack.first).toBe(null);
  });
});

describe('Bad inputs', () => {
  it('when the stack is empty, popping should result null', () => {
    const stack = new Stack<any>();
    expect(stack.pop()).toBe(null);
  });
});
