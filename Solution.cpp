
#include <vector>
using namespace std;

class Matrix3D {

    vector<vector<vector<int>>> matrix;
    vector<int> countOnesForLayerX;

public:
    Matrix3D(int size) {
        matrix.assign(size, vector<vector<int>>(size, vector<int>(size)));
        countOnesForLayerX.resize(size);
    }

    void setCell(int x, int y, int z) {
        countOnesForLayerX[x] += matrix[x][y][z] ^ 1;
        matrix[x][y][z] = 1;
    }

    void unsetCell(int x, int y, int z) {
        countOnesForLayerX[x] -= matrix[x][y][z] & 1;
        matrix[x][y][z] = 0;
    }

    int largestMatrix() const {
        int maxOnesForLayerX = 0;
        int largestLayerX = countOnesForLayerX.size() - 1;
        for (int i = countOnesForLayerX.size() - 1; i >= 0; --i) {
            if (maxOnesForLayerX < countOnesForLayerX[i]) {
                maxOnesForLayerX = countOnesForLayerX[i];
                largestLayerX = i;
            }
        }
        return largestLayerX;
    }
};
