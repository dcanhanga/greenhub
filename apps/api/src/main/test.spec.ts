import { expect, test } from 'vitest';
import { soma } from '.';
test('should be able to run tests', () => {
	expect(soma(1, 1)).toBe(2);
	expect(soma(1, 3)).toBe(4);
});
