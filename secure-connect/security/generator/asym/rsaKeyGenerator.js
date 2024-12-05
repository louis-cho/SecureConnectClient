export default class RSAKeyGenerator {
  constructor() {
    this.init();
  }

  /**
   * 추후 파일 관련 설정을 불러와 RSA 암복호화 파라미터 설정하기
   */
  init() {}

  /**
   * RSA 공개키 비밀키를 생성해 반환한다.
   * @returns RSA Public, Private Key Pair
   */
  async generateRSAKey() {
    const keyPair = await crypto.subtle.generateKey(
      {
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256",
      },
      true,
      ["encrypt", "decrypt"]
    );

    return keyPair;
  }
}
