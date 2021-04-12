import { IntClosedRange } from "../src/intClosedRange";

test('必ず成功', () => {
  expect(1).toBe(1);
});

// --- test for setup --
// test('必ず失敗', () => {
//   expect(true).toBe(false);
// });

describe('整数閉区間IntClosedRange-[3,7]の場合', () => {
  let range: IntClosedRange | null = null;
  beforeEach(() => {
    range = new IntClosedRange(3, 7);
  });

  test('下端点getLower()は3', () => {
    //const range = new IntClosedRange(3, 7);
    expect(range?.getLower()).toBe(3);
  });

  test('上端点getUpper()は7', () => {
    expect(range?.getUpper()).toBe(7);
  });

  test('notation()は文字列表記"[3,7]"を返す', () => {
    expect(range?.notation()).toBe('[3,7]');
  });

  // パラメタライズドテスト
  describe('includes()は指定した整数を含むかどうかを返す', () => {
    test.each([
      [5, true, '含む'],
      [2, false, '含まない'],
      [8, false, '含まない'],
      //[4, false, '含まない'], // defect injection
      [3, true, '下端点3を含む'],
      [7, true, '上端点7を含む'],
    ])('.includes(%i)=%s (%s)', (n, expected) => {
      expect(range?.includes(n)).toBe(expected);
    });
  });
});

describe('整数閉区間IntClosedRange-[2,8]の場合', () => {
  let range: IntClosedRange | null = null;
  beforeEach(() => {
    range = new IntClosedRange(2, 8);
  });

  test('下端点getLower()は2', () => {
    expect(range?.getLower()).toBe(2);
  });

  test('上端点getUpper()は8', () => {
    expect(range?.getUpper()).toBe(8);
  });

  test('notation()は文字列表記"[2,8]"を返す', () => {
    expect(range?.notation()).toBe('[2,8]');
  });
});