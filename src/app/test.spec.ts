import { Calculator } from './testservice';
describe('testservice', () => {
  it('add', () => {
    const service = new Calculator();
    expect(service.add(1, 2)).toBe(3);
  });
  it('subtract', () => {
    const service = new Calculator();
    expect(service.subtract(1, 2)).toBe(-1);
  });
  it('multiply', () => {
    const service = new Calculator();
    expect(service.multiply(1, 2)).toBe(2);
  });
});
