class Block {
    constructor(index,nonce, previousHash, timestamp, data, hash) {
        this.index = index;
        this.nonce = nonce;
        this.previousHash = previousHash.toString();    
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash.toString();
    }
}

module.exports = Block