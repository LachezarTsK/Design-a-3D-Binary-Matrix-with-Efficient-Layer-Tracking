
package main

type Matrix3D struct {
    matrix             [][][]int
    countOnesForLayerX []int
}

func Constructor(size int) Matrix3D {
    matrix3D := Matrix3D{
        matrix:             make([][][]int, size),
        countOnesForLayerX: make([]int, size),
    }

    for x := 0; x < size; x++ {
        matrix3D.matrix[x] = make([][]int, size)
        for y := 0; y < size; y++ {
            matrix3D.matrix[x][y] = make([]int, size)
        }
    }
    return matrix3D
}

func (this *Matrix3D) SetCell(x int, y int, z int) {
    this.countOnesForLayerX[x] += this.matrix[x][y][z] ^ 1
    this.matrix[x][y][z] = 1
}

func (this *Matrix3D) UnsetCell(x int, y int, z int) {
    this.countOnesForLayerX[x] -= this.matrix[x][y][z] & 1
    this.matrix[x][y][z] = 0
}

func (this *Matrix3D) LargestMatrix() int {
    maxOnesForLayerX := 0
    largestLayerX := len(this.countOnesForLayerX) - 1
    for i := len(this.countOnesForLayerX) - 1; i >= 0; i-- {
        if maxOnesForLayerX < this.countOnesForLayerX[i] {
            maxOnesForLayerX = this.countOnesForLayerX[i]
            largestLayerX = i
        }
    }
    return largestLayerX
}
