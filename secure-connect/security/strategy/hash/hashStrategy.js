export default class HashStrategy {
  async sign(data) {
    throw new Error("sign Method should be Implemented!");
  }

  async verify(data, hash) {
    throw new Error("Verify Method should be Implemented!");
  }

  // 두 ArrayBuffer를 비교하는 유틸리티 함수
  arrayBufferEquals(buffer1, buffer2) {
    if (buffer1.byteLength !== buffer2.byteLength) {
      return false;
    }
    const view1 = new Uint8Array(buffer1);
    const view2 = new Uint8Array(buffer2);
    for (let i = 0; i < buffer1.byteLength; i++) {
      if (view1[i] !== view2[i]) {
        return false;
      }
    }
    return true;
  }
}
