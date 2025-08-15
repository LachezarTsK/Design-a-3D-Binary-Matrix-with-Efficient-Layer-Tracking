
class Matrix3D {

    matrix: number[][][];
    countOnesForLayerX: number[];

    constructor(size: number) {
        this.matrix = new Array(size);
        for (let x = 0; x < size; ++x) {
            this.matrix[x] = new Array(size);
            for (let y = 0; y < size; ++y) {
                this.matrix[x][y] = new Array<number>(size).fill(0);
            }
        }

        this.countOnesForLayerX = new Array<number>(size).fill(0);
    }


    setCell(x: number, y: number, z: number): void {
        this.countOnesForLayerX[x] += this.matrix[x][y][z] ^ 1;
        this.matrix[x][y][z] = 1;
    }

    unsetCell(x: number, y: number, z: number): void {
        this.countOnesForLayerX[x] -= this.matrix[x][y][z] & 1;
        this.matrix[x][y][z] = 0;
    }

    largestMatrix(): number {
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
