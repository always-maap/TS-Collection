import { Stack } from '../';

it('add 1 node to stack return 1 which is size of stack', () => {
  const stack = new Stack();
  expect(stack.push(5)).toBe(1);
});

it('add 3 node to stack return 3 which is size of stack', () => {
  const stack = new Stack();
  stack.push(11);
  stack.push(48);
  expect(stack.push(23)).toBe(3);
});

it('when stack is empty, pop return null', () => {
  const stack = new Stack();
  expect(stack.pop()).toBe(null);
});
