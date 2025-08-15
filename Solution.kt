
class Matrix3D(size: Int) {

    private var matrix = Array(size) { Array(size) { IntArray(size) } }
    private var countOnesForLayerX = IntArray(size)

    fun setCell(x: Int, y: Int, z: Int) {
        countOnesForLayerX[x] += matrix[x][y][z] xor 1
        matrix[x][y][z] = 1
    }

    fun unsetCell(x: Int, y: Int, z: Int) {
        countOnesForLayerX[x] -= matrix[x][y][z] and 1
        matrix[x][y][z] = 0
    }

    fun largestMatrix(): Int {
        var maxOnesForLayerX = 0
        var largestLayerX = countOnesForLayerX.size - 1
        for (i in countOnesForLayerX.size - 1 downTo 0) {
            if (maxOnesForLayerX < countOnesForLayerX[i]) {
                maxOnesForLayerX = countOnesForLayerX[i]
                largestLayerX = i
            }
        }
        return largestLayerX
    }
}
