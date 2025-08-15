
using System;

public class Matrix3D
{
    private readonly int[ , , ] matrix;
    private readonly int[] countOnesForLayerX;

    public Matrix3D(int size)
    {
        matrix = new int[size, size, size];
        countOnesForLayerX = new int[size];
    }

    public void SetCell(int x, int y, int z)
    {
        countOnesForLayerX[x] += matrix[x, y, z] ^ 1;
        matrix[x, y, z] = 1;
    }

    public void UnsetCell(int x, int y, int z)
    {
        countOnesForLayerX[x] -= matrix[x, y, z] & 1;
        matrix[x, y, z] = 0;
    }

    public int LargestMatrix()
    {
        int maxOnesForLayerX = 0;
        int largestLayerX = countOnesForLayerX.Length - 1;
        for (int i = countOnesForLayerX.Length - 1; i >= 0; --i)
        {
            if (maxOnesForLayerX < countOnesForLayerX[i])
            {
                maxOnesForLayerX = countOnesForLayerX[i];
                largestLayerX = i;
            }
        }
        return largestLayerX;
    }
}
