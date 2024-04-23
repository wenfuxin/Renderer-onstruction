import { getLocalStrogeType } from '@/utils/localStroge.js';

describe('Utils:getLocalStrogeType', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns null if key does not exist in localStorage', () => {
    expect(getLocalStrogeType('nonexistentKey')).toBeNull();
  });

  it('returns null if data cannot be parsed as JSON', () => {
    localStorage.setItem('invalidDataKey', 'not valid JSON');
    expect(getLocalStrogeType('invalidDataKey')).toBeNull();
  });

  it('returns the type property of the parsed JSON data', () => {
    const data = { type: 'exampleType' };
    localStorage.setItem('exampleKey', JSON.stringify(data));
    expect(getLocalStrogeType('exampleKey')).toBe('exampleType');
  });
});