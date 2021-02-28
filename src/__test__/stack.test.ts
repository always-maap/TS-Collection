import { Stack } from '../Stacks';

it('add 1 node to stack return 1 which is size of stack', () => {
  const stack = new Stack<number>();
  expect(stack.push(5)).toBe(1);
});

it('add 3 node to stack return 3 which is size of stack', () => {
  const stack = new Stack<number>();
  stack.push(11);
  stack.push(48);
  expect(stack.push(23)).toBe(3);
});

it('when stack is empty, pop return null', () => {
  const stack = new Stack<any>();
  expect(stack.pop()).toBe(null);
});

it('add 2 node and remove last node should result, first and last be the same', () => {
  const stack = new Stack<string>();
  stack.push('stack');
  stack.push('overflow');
  stack.pop();
  expect(stack.first).toBe(stack.last);
});
