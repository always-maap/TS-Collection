import { Stack } from './Stacks';

describe('Basic functionality', () => {
  it('should create an empty stack', () => {
    const stack = new Stack();
    expect(stack.size()).toBe(0);
  });

  it('should push', () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);

    expect(stack.toString()).toBe('1,2');
  });

  it('should pop', () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(null);
  });
});

describe('Bad inputs', () => {
  it('when the stack is empty, popping should result null', () => {
    const stack = new Stack();
    expect(stack.pop()).toBe(null);
  });
});
