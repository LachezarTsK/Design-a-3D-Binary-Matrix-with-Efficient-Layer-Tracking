
class Matrix3D {
    /**
     * @param {number} size
     */
    constructor(size) {
        //number[][][]
        this.matrix = new Array(size);
        for (let x = 0; x < size; ++x) {
            this.matrix[x] = new Array(size);
            for (let y = 0; y < size; ++y) {
                this.matrix[x][y] = new Array(size).fill(0);
            }
        }

        //number[]
        this.countOnesForLayerX = new Array(size).fill(0);
    }

    /** 
     * @param {number} x 
     * @param {number} y 
     * @param {number} z
     * @return {void}
     */
    setCell(x, y, z) {
        this.countOnesForLayerX[x] += this.matrix[x][y][z] ^ 1;
        this.matrix[x][y][z] = 1;
    }

    /** 
     * @param {number} x 
     * @param {number} y 
     * @param {number} z
     * @return {void}
     */
    unsetCell(x, y, z) {
        this.countOnesForLayerX[x] -= this.matrix[x][y][z] & 1;
        this.matrix[x][y][z] = 0;
    }

    /**
     * @return {number}
     */
    largestMatrix() {
        let maxOnesForLayerX = 0;
        let largestLayerX = this.countOnesForLayerX.length - 1;
        for (let i = this.countOnesForLayerX.length - 1; i >= 0; --i) {
            if (maxOnesForLayerX < this.countOnesForLayerX[i]) {
                maxOnesForLayerX = this.countOnesForLayerX[i];
                largestLayerX = i;
            }
        }
        return largestLayerX;
    }
}
