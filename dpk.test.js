const {
  deterministicPartitionKey,
  getHash,
  MAX_PARTITION_KEY_LENGTH,
  TRIVIAL_PARTITION_KEY
} = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns 'TRIVIAL_PARTITION_KEY' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY);
  });

  it("Returns the original partitionKey when it doesn't exceed MAX_PARTITION_KEY_LENGTH", () => {
    const partitionKey = '123456789'.slice(0, MAX_PARTITION_KEY_LENGTH);
    const trivialKey = deterministicPartitionKey({ partitionKey });
    expect(trivialKey).toBe(partitionKey);
  });

  it("Returns the hash of partitionKey when it exceeds MAX_PARTITION_KEY_LENGTH", () => {
    const partitionKey = "#".repeat(MAX_PARTITION_KEY_LENGTH + 1);
    const trivialKey = deterministicPartitionKey({ partitionKey });
    expect(trivialKey).toBe(getHash(partitionKey));
  });

  it("Returns the hash of object", () => {
    const obj = { key: 'value', partitionKey: undefined };
    const trivialKey = deterministicPartitionKey(obj);
    expect(trivialKey).toBe(getHash(JSON.stringify(obj)));
  });
});
